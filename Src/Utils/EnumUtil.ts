import {BaseException} from "@Exceptions/BaseException";

export class EnumUtil {
    public static checkEnumKey<T extends BaseException>(
        enumKey: string, enumObj: any, except: T
    ): void {
        if(!Object.keys(enumObj).includes(enumKey)) throw except;
    }
}
