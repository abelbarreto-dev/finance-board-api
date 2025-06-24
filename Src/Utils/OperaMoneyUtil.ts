import {OperaException} from "@Exceptions/OperaException";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {EnumUtil} from "@Utils/EnumUtil";

export class OperaMoneyUtil {
    private static except: OperaException = new OperaException("");

    private static checkEnumValue(value: string, enumerate: {}): void {
        this.except.message = `invalid ${value} value found for type transfer`;

        EnumUtil.checkEnumKey<OperaException>(value, enumerate, this.except);
    }

    public static checkOperaMoney(operaMoney: OperaMoneyDTO): void {
        this.checkEnumValue(operaMoney.typeTransfer, EnumFinancePlus);

        this.except.message = (
            "invalid money operation balance value found, money operation balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaMoney.balanceValue, this.except);
    }

    public static checkOperaMoneyBox(operaMoneyBox: OperaMoneyBoxDTO): void {
        this.checkEnumValue(operaMoneyBox.typeTransfer, EnumFinance);

        this.except.message = (
            "invalid money box operation balance value found, money box operation balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaMoneyBox.balanceValue, this.except);
    }
}
