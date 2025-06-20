export class Invoice {
    id: number = 0;
    cardId: number = 0;
    description?: string;
    quantity: number = 0;
    invoicePaid: number = 0;
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
