import {OperaException} from "@Exceptions/OperaException";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";
import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export class OperaBankUtil {
    private static checkName(name: string, paramName: string): void {
        const regName = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (name.match(regName) === null) throw new OperaException (
            `invalid characters found in bank operation ${paramName} name`
        );
    }

    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (description.match(regDescription) === null) throw new OperaException (
            "invalid characters found in bank operation"
        );
    }

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
        this.checkBalance(operaBank.balanceValue, "opera bank");
    }

    public static checkOperaBankBox(operaBankBox: OperaBankBoxDTO): void {
        this.checkEnumValue(operaBankBox.typeTransfer, EnumFinance, "type transfer");

        this.checkBalance(operaBankBox.balanceValue, "opera bank box");
    }
}
