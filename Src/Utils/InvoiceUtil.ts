import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {InvoiceException} from "@Exceptions/InvoiceException";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class InvoiceUtil {
    private static except: InvoiceException = new InvoiceException("");

    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (description.match(regDescription) === null) throw new InvoiceException (
            "invalid characters found in money box description"
        );
    }

    private static checkQuantity(quantity: number): void {
        if (quantity < 0) throw new InvoiceException(
            "quantity value must be positive"
        );
    }

    private static checkQuantityAndPaidQuantity(quantity: number, paidQuantity: number): void {
        this.except.message = "quantity value must be greater than or equal to paid quantity";

        if (quantity < paidQuantity) throw this.except;
    }

    public static checkInvoice(invoice: InvoiceDTO): void {
        const description: any = invoice.description;

        if (description) this.checkDescription(invoice.description as string);

        this.checkQuantity(invoice.quantity);

        this.except.message = "invalid invoice balance value found, invoice balance value must be positive";
        BalanceUtil.checkBalance<InvoiceException>(invoice.balanceValue, this.except);
        this.except.message = "invalid invoice paid value found, invoice paid value must be positive";
        BalanceUtil.checkBalance<InvoiceException>(invoice.invoicePaid, this.except);

        this.checkQuantityAndPaidQuantity(invoice.quantity, invoice.invoicePaid);
    }
}
