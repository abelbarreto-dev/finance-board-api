import * as process from "node:process";
import {Request, Response, NextFunction} from "express";
import jwt, {JwtPayload, SignOptions} from "jsonwebtoken";
import {BaseException} from "@Exceptions/BaseException";

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

    jwt.verify(token, SECRET_KEY, (error, user) => {
        if (error) return response.sendStatus(403);

        request.body = {
            ...request.body,
            account_id_fk: (user as JwtPayload).account_id
        }

        next();
    });
};

export const generateUserToken = async (
    payload: any
): Promise<string> => {
    const options: SignOptions = {};

    const expireIn = process.env.EXPIRE_IN || "1";

    await checkInspireIn(expireIn);

    options.expiresIn = expireIn as StringValue;

    return jwt.sign(payload, SECRET_KEY, options);
};
