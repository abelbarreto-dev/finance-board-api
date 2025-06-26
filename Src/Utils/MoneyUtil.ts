import {MoneyDTO} from "@Dtos/MoneyDTO";
import {MoneyException} from "@Exceptions/MoneyException";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";

export class MoneyUtil {
    private static checkDescription(description: string): void {
        const except = new MoneyException("invalid characters or length found in money box description");

        WordUtil.checkDescription<MoneyException>(description, 253, except);
    }

    public static checkMoney(money: MoneyDTO): void {
        const except = new MoneyException(
            "invalid money balance value found, money balance value must be positive"
        );

        BalanceUtil.checkBalance<MoneyException>(money.balanceValue, except);
    }

    public static checkMoneyBox(moneyBox: MoneyBoxDTO): void {
        const objective: any = moneyBox.objective;

        const except = new MoneyException(
            "invalid money box objective value found, money box objective value must be positive"
        );

        if (![undefined, null].includes(objective))
            BalanceUtil.checkBalance<MoneyException>(moneyBox.objective as number, except);

        except.message = "invalid money box balance value found, money box balance value must be positive";
        BalanceUtil.checkBalance<MoneyException>(moneyBox.balanceValue, except);

        this.checkDescription(moneyBox.description);
    }
}
