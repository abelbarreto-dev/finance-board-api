import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {InvoiceException} from "@Exceptions/InvoiceException";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";

export class InvoiceUtil {
    private static checkDescription(description?: string): void {
        if (!description) return;

        const descriptionToCheck: string = description.toString();

        const except = new InvoiceException("invalid characters found in invoice description or length");

        WordUtil.checkDescription<InvoiceException>(descriptionToCheck, 253, except);
    }

    private static checkQuantity(quantity: number): void {
        const except = new InvoiceException("quantity value must be positive");

        if (quantity < 0) throw except;
    }

    private static checkQuantityAndPaidQuantity(quantity: number, paidQuantity: number): void {
        const except = new InvoiceException("quantity value must be greater than or equal to paid quantity");

        if (quantity < paidQuantity) throw except;
    }

    public static checkInvoice(invoice: InvoiceDTO): void {
        const description: any = invoice.description;

        if (description) this.checkDescription(invoice.description);

        this.checkQuantity(invoice.quantity);

        const except = new InvoiceException(
            "invalid invoice balance value found, invoice balance value must be positive"
        );

        BalanceUtil.checkBalance<InvoiceException>(invoice.balanceValue, except);
        except.message = "invalid invoice paid value found, invoice paid value must be positive";
        BalanceUtil.checkBalance<InvoiceException>(invoice.invoicePaid, except);

        this.checkQuantityAndPaidQuantity(invoice.quantity, invoice.invoicePaid);
    }
}
