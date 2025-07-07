import {InvoiceDTO} from "@Dtos/InvoiceDTO";

const invoiceSuccessNotDescription: InvoiceDTO = {
    cardId: 1,
    quantity: 12,
    invoicePaid: 12,
    balanceValue: 85.70,
    reversal: false
};

const invoiceSuccess: InvoiceDTO = {
    ...invoiceSuccessNotDescription,
    reversal: true,
    description: "test invoice"
};

const invoiceFailedDescription: InvoiceDTO = {
    ...invoiceSuccess,
    description: "invoice ".repeat(25)
};

const invoiceFailedQuantity: InvoiceDTO = {
    ...invoiceSuccess,
    quantity: 0
};

const invoiceFailedQuantityAndPaid: InvoiceDTO = {
    ...invoiceSuccess,
    quantity: 5,
    invoicePaid: 7
};

export const invoiceDTOS = {
    success: invoiceSuccess,
    successNotDescription: invoiceSuccessNotDescription,
    errorDescription: invoiceFailedDescription,
    errorQuantity: invoiceFailedQuantity,
    errorPaidQuantity: invoiceFailedQuantityAndPaid
};
