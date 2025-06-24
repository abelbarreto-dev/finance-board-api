import {OperaException} from "@Exceptions/OperaException";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class OperaBankUtil {
    private static except: OperaException = new OperaException("");

    private static checkName(name: string, paramName: string): void {
        const regName = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        this.except.message = `invalid characters found in bank operation ${paramName} name`;

        if (name.match(regName) === null) throw this.except;
    }

    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        this.except.message = "invalid characters found in bank operation description";

        if (description.match(regDescription) === null) throw this.except;
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
        this.checkName(operaBank.senderName, "sender");
        this.checkName(operaBank.receiverName, "receiver");

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
