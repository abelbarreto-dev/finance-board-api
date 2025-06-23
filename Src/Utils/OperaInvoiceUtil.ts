import {OperaException} from "@Exceptions/OperaException";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";

export class OperaInvoiceUtil {
    private static checkBalance(balance: number, typeBalance: string = ""): void {
        if (balance < 0) throw new OperaException(
            `${typeBalance} balance value must be positive`
        );
    }

    public static checkOperaInvoice(operaInvoice: OperaInvoiceDTO): void {
        this.checkBalance(operaInvoice.balanceValue, "opera invoice");
    }
}
