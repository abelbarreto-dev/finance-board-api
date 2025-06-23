import {MoneyDTO} from "@Dtos/MoneyDTO";
import {MoneyException} from "@Exceptions/MoneyException";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";

export class MoneyUtil {
    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (description.match(regDescription) === null) throw new MoneyException(
            "invalid characters found in money box description"
        );
    }

    private static checkBalance(balance: number): void {
        if (balance < 0) throw new MoneyException(
            "balance value must be positive"
        );
    }

    public static checkMoney(money: MoneyDTO): void {
        this.checkBalance(money.balanceValue);
    }

    public static checkMoneyBox(moneyBox: MoneyBoxDTO): void {
        const objective: any = moneyBox.objective;

        if (![undefined, null].includes(objective)) this.checkBalance(objective);
        this.checkDescription(moneyBox.description);
        this.checkBalance(moneyBox.balanceValue);
    }
}
