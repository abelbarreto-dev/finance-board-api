import {BaseException} from "@Exceptions/BaseException";

export class CardException extends BaseException {
    constructor(message: string, code: number = 400) {
        super(message, code);
    }
}
