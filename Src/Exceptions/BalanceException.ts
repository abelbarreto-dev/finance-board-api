import {BaseException} from "@Exceptions/BaseException";

export class BalanceException extends BaseException {
    constructor(message: string, code: number = 400) {
        super(message, code);
    }
}
