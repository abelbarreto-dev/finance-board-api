import {OperaException} from "@Exceptions/OperaException";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class OperaInvoiceUtil {
    public static checkOperaInvoice(operaInvoice: OperaInvoiceDTO): void {
        const except = new OperaException(
            "invalid opera invoice balance value found, opera invoice balance value must be positive"
        );

        BalanceUtil.checkBalance<OperaException>(operaInvoice.balanceValue, except);
    }
}
