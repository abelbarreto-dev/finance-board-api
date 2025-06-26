import {BaseException} from "@Exceptions/BaseException";

export class MobileUtil {
    public static checkMobile<T extends BaseException>(mobile: string, except: T): void {
        const regMobile = /^[0-9]{11,13}$/;

        if (mobile.match(regMobile) === null) throw except;
    }
}
