import {BaseException} from "@Exceptions/BaseException";

export class BalanceUtil {
    public static checkBalance<T extends BaseException>(
        balance: number,
        except: T,
    ): void {
        if (balance < 0) throw except;
    }
}
