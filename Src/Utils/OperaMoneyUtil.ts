import {OperaException} from "@Exceptions/OperaException";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export class OperaMoneyUtil {
    private static checkBalance(balance: number, typeBalance: string = ""): void {
        if (balance < 0) throw new OperaException(
            `${typeBalance} balance value must be positive`
        );
    }

    private static checkEnumValue(value: string, enumerate: {}, enumName: string): void {
        const enumValues: {[index: string]: string} = {...enumerate};

        if (!Object.keys(enumValues).includes(value)) throw new OperaException(
            `invalid ${value} value found at ${enumName}`
        );
    }

    public static checkOperaMoney(operaMoney: OperaMoneyDTO): void {
        this.checkEnumValue(operaMoney.typeTransfer, EnumFinancePlus, "type transfer");
        this.checkBalance(operaMoney.balanceValue, "opera money");
    }

    public static checkOperaMoneyBox(operaMoneyBox: OperaMoneyBoxDTO): void {
        this.checkEnumValue(operaMoneyBox.typeTransfer, EnumFinance, "type transfer");
        this.checkBalance(operaMoneyBox.balanceValue, "opera money box");
    }
}
