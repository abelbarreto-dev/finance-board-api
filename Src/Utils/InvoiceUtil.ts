import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {InvoiceException} from "@Exceptions/InvoiceException";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";

export class InvoiceUtil {
    private static except: InvoiceException = new InvoiceException("");

    private static checkDescription(description?: string): void {
        if (!description) return;

        const descriptionToCheck: string = description.toString();

        this.except.message = "invalid characters found in invoice description or length";

        WordUtil.checkDescription<InvoiceException>(descriptionToCheck, 253, this.except);
    }

    private static checkQuantity(quantity: number): void {
        this.except.message = "quantity value must be positive";

        if (quantity < 0) throw this.except;
    }

    private static checkQuantityAndPaidQuantity(quantity: number, paidQuantity: number): void {
        this.except.message = "quantity value must be greater than or equal to paid quantity";

        if (quantity < paidQuantity) throw this.except;
    }

    public static checkInvoice(invoice: InvoiceDTO): void {
        const description: any = invoice.description;

        if (description) this.checkDescription(invoice.description);

        this.checkQuantity(invoice.quantity);

        this.except.message = "invalid invoice balance value found, invoice balance value must be positive";
        BalanceUtil.checkBalance<InvoiceException>(invoice.balanceValue, this.except);
        this.except.message = "invalid invoice paid value found, invoice paid value must be positive";
        BalanceUtil.checkBalance<InvoiceException>(invoice.invoicePaid, this.except);

        this.checkQuantityAndPaidQuantity(invoice.quantity, invoice.invoicePaid);
    }
}
