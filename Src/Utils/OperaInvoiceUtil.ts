import {OperaException} from "@Exceptions/OperaException";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class OperaInvoiceUtil {
    private static except: OperaException = new OperaException("");

    public static checkOperaInvoice(operaInvoice: OperaInvoiceDTO): void {
        this.except.message = "invalid opera invoice balance value found, opera invoice balance value must be positive";
        BalanceUtil.checkBalance<OperaException>(operaInvoice.balanceValue, this.except);
    }
}
