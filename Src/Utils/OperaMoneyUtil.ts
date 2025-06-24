import {OperaException} from "@Exceptions/OperaException";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class OperaMoneyUtil {
    private static except: OperaException = new OperaException("");

    private static checkEnumValue(value: string, enumerate: {}, enumName: string): void {
        const enumValues: {[index: string]: string} = {...enumerate};

        this.except.message = `invalid ${value} value found at ${enumName}`;

        if (!Object.keys(enumValues).includes(value)) throw this.except;
    }

    public static checkOperaMoney(operaMoney: OperaMoneyDTO): void {
        this.checkEnumValue(operaMoney.typeTransfer, EnumFinancePlus, "type transfer");

        this.except.message = "invalid money operation balance value found, money operation balance value must be positive";
        BalanceUtil.checkBalance<OperaException>(operaMoney.balanceValue, this.except);
    }

    public static checkOperaMoneyBox(operaMoneyBox: OperaMoneyBoxDTO): void {
        this.checkEnumValue(operaMoneyBox.typeTransfer, EnumFinance, "type transfer");

        this.except.message = "invalid money box operation balance value found, money box operation balance value must be positive";
        BalanceUtil.checkBalance<OperaException>(operaMoneyBox.balanceValue, this.except);
    }
}
