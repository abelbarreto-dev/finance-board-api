import {Response} from "express";

export const makeResponse = (): Response => {
    const resp = {
        ...Response,
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
        end: jest.fn().mockReturnThis()
    };
    return resp as unknown as Response;
};
