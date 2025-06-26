import {BaseException} from "@Exceptions/BaseException";

export class EmailUtil {
    public static checkEmail<T extends BaseException>(email: string, except: T): void {
        const regEmail = (
            /^[a-z][a-z0-9._-]{1,254}[a-z0-9]@[a-z0-9]{1,16}(\.[a-z]{2,3}){1,2}$/
        );

        if (email.match(regEmail) === null) throw except;
    }
}
