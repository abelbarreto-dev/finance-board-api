import { OperaInvoiceDTO } from "@Dtos/OperaInvoiceDTO";

const successOperaInvoice: OperaInvoiceDTO = {
    invoiceId: 1,
    balanceValue: 2500
};

const failedOperaInvoice: OperaInvoiceDTO = {
    ...successOperaInvoice,
    balanceValue: -0.0001
};

export const operaInvoiceDTOS = {
    success: successOperaInvoice,
    failed: failedOperaInvoice
};
