import {MoneyDTO} from "@Dtos/MoneyDTO";
import {MoneyException} from "@Exceptions/MoneyException";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class MoneyUtil {
    private static except: MoneyException = new MoneyException("");

    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        this.except.message = "invalid characters found in money box description";

        if (description.match(regDescription) === null) throw this.except;
    }

    public static checkMoney(money: MoneyDTO): void {
        this.except.message = "invalid money balance value found, money balance value must be positive";
        BalanceUtil.checkBalance<MoneyException>(money.balanceValue, this.except);
    }

    public static checkMoneyBox(moneyBox: MoneyBoxDTO): void {
        const objective: any = moneyBox.objective;

        this.except.message = "invalid money box objective value found, money box objective value must be positive";
        if (![undefined, null].includes(objective))
            BalanceUtil.checkBalance<MoneyException>(moneyBox.objective as number, this.except);

        this.except.message = "invalid money box balance value found, money box balance value must be positive";
        BalanceUtil.checkBalance<MoneyException>(moneyBox.balanceValue, this.except);

        this.checkDescription(moneyBox.description);
    }
}
