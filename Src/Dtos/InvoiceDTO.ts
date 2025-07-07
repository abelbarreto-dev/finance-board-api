export interface InvoiceDTO {
    cardId: number;
    description?: string;
    quantity: number;
    invoicePaid: number;
    reversal?: boolean;
    balanceValue: number;
}
