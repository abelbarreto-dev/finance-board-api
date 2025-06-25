import {InvoiceDTO} from "@Dtos/InvoiceDTO";

const invoiceSuccess: InvoiceDTO = {
    cardId: 1,
    description: "test invoice",
    quantity: 12,
    invoicePaid: 12,
    balanceValue: 85.70,
};

const invoiceSuccessNotDescription: InvoiceDTO = {
    cardId: 1,
    quantity: 12,
    invoicePaid: 12,
    balanceValue: 85.70,
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

const invoiceFailedBalance: InvoiceDTO = {
    ...invoiceSuccess,
    balanceValue: -85.70
};

export const invoiceDTOS = {
    success: invoiceSuccess,
    successNotDescription: invoiceSuccessNotDescription,
    errorDescription: invoiceFailedDescription,
    errorQuantity: invoiceFailedQuantity,
    errorPaidQuantity: invoiceFailedQuantityAndPaid
};
