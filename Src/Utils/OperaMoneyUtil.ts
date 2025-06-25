import {OperaException} from "@Exceptions/OperaException";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {EnumUtil} from "@Utils/EnumUtil";

export class OperaMoneyUtil {
    private static checkEnumValue(value: string, enumerate: {}): void {
        const except = new OperaException(`invalid ${value} value found for type transfer`);

        EnumUtil.checkEnumKey<OperaException>(value, enumerate, except);
    }

    public static checkOperaMoney(operaMoney: OperaMoneyDTO): void {
        this.checkEnumValue(operaMoney.typeTransfer, EnumFinancePlus);

        const except = new OperaException(
            "invalid money operation balance value found, money operation balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaMoney.balanceValue, except);
    }

    public static checkOperaMoneyBox(operaMoneyBox: OperaMoneyBoxDTO): void {
        this.checkEnumValue(operaMoneyBox.typeTransfer, EnumFinance);

        const except = new OperaException(
            "invalid money box operation balance value found, money box operation balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaMoneyBox.balanceValue, except);
    }
}
