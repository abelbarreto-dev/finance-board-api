import {OperaException} from "@Exceptions/OperaException";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";
import {EnumUtil} from "@Utils/EnumUtil";

export class OperaBankUtil {
    private static checkFirstName(name: string, paramName: string): void {
        const except = new OperaException(`invalid characters found in bank operation ${paramName} name`);

        WordUtil.checkFirstName<OperaException>(name, except);
    }

    private static checkDescription(description: string): void {
        const except = new OperaException("invalid characters found in bank operation description");

        WordUtil.checkDescription<OperaException>(description, 253, except);
    }

    private static checkEnumValue(value: string, enumerate: {}, enumName: string): void {
        const except = new OperaException(`invalid ${value} value found at ${enumName}`);

        EnumUtil.checkEnumKey<OperaException>(value, enumerate, except);
    }

    public static checkOperaBank(operaBank: OperaBankDTO): void {
        const enums = {
            typeTransfer: this.checkEnumValue,
            state: this.checkEnumValue,
            bankOperation: this.checkEnumValue
        }

        enums.typeTransfer(operaBank.typeTransfer, EnumTransfer, "type transfer");
        enums.state(operaBank.state, EnumOpState, "operation state");
        enums.bankOperation(operaBank.bankOperation, EnumFinancePlus, "bank operation")

        this.checkDescription(operaBank.description);
        this.checkFirstName(operaBank.senderName, "sender");
        this.checkFirstName(operaBank.receiverName, "receiver");

        const except = new OperaException(
            "invalid bank operation balance value found, bank operation balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaBank.balanceValue, except);
    }

    public static checkOperaBankBox(operaBankBox: OperaBankBoxDTO): void {
        this.checkEnumValue(operaBankBox.typeTransfer, EnumFinance, "type transfer");

        const except = new OperaException(
            "invalid bank operation objective value found, bank operation objective value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaBankBox.balanceValue, except);
    }
}
