import {OperaException} from "@Exceptions/OperaException";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";

export class OperaBankUtil {
    private static except: OperaException = new OperaException("");

    private static checkFirstName(name: string, paramName: string): void {
        this.except.message = `invalid characters found in bank operation ${paramName} name`;

        WordUtil.checkFirstName<OperaException>(name, this.except);
    }

    private static checkDescription(description: string): void {
        this.except.message = "invalid characters found in bank operation description";

        WordUtil.checkDescription<OperaException>(description, 253, this.except);
    }

    private static checkEnumValue(value: string, enumerate: {}, enumName: string): void {
        const enumValues: {[index: string]: string} = {...enumerate};

        this.except.message = `invalid ${value} value found at ${enumName}`;

        if (!Object.keys(enumValues).includes(value)) throw this.except;
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

        this.except.message = "invalid bank operation balance value found, bank operation balance value must be positive";
        BalanceUtil.checkBalance<OperaException>(operaBank.balanceValue, this.except);
    }

    public static checkOperaBankBox(operaBankBox: OperaBankBoxDTO): void {
        this.checkEnumValue(operaBankBox.typeTransfer, EnumFinance, "type transfer");

        this.except.message = "invalid bank operation objective value found, " +
            "bank operation objective value must be positive";
        BalanceUtil.checkBalance<OperaException>(operaBankBox.balanceValue, this.except);
    }
}
