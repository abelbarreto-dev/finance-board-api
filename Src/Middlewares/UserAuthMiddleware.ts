import * as process from "node:process";
import {Request, Response, NextFunction} from "express";
import jwt, {JwtPayload, SignOptions} from "jsonwebtoken";
import {BaseException} from "@Exceptions/BaseException";
import {v4 as UuidV4} from "uuid";
import {User} from "@Models/User";
import {ServiceUserToken} from "@Services/Session/ServiceUserToken";
import {UserTokenDTO} from "@Dtos/Special/UserTokenDTO";

const SECRET_KEY = process.env.SECRET_KEY || "your secret key";

type StringValue = `${number}${"ms" | "s" | "m" | "h" | "d" | "y"}`;

const checkInspireIn = async (
    expiresIn: string | number
): Promise<void> => {
    if (typeof expiresIn === "number") return;

    const regex = /^[0-9]+(ms|s|m|h|d|y)$/;

    if (!regex.test(expiresIn as string)) throw new BaseException("Internal Server Error", 500);
};

export const userAuthentication = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<any> => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return response.sendStatus(401);
    const serviceToken = new ServiceUserToken();

    try {
        const user = jwt.verify(token, SECRET_KEY) as JwtPayload;

        request.body = {
            ...request.body,
            userId: user.userId
        };

        const tokens = await serviceToken.getUserTokens(user.userId);
        const foundToken = tokens.find(tokenValue => tokenValue.token === token);

        if (!foundToken) return response.sendStatus(403);

        next();

    } catch (error) {
        return response.sendStatus(403);
    }
};

export const generateUserToken = async (
    payload: User
): Promise<string> => {
    const expiresIn = process.env.EXPIRES_IN || "0m";
    await checkInspireIn(expiresIn);
    const serviceToken = new ServiceUserToken();

    const jti = UuidV4();

    const options: SignOptions = {
        expiresIn: expiresIn as StringValue,
        jwtid: jti
    };

    const token = jwt.sign(payload, SECRET_KEY, options);

    const userToken: UserTokenDTO = {
        userId: payload.id,
        token: token,
        expiresIn: expiresIn
    };

    await serviceToken.saveUserToken(userToken);

    return token;
};
