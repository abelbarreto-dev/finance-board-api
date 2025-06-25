import {CardDTO} from "@Dtos/CardDTO";
import {EnumCard} from "@Enums/EnumCard";
import {EnumFlag} from "@Enums/EnumFlag";

const cardDTOSuccess: CardDTO = {
    bankId: 1,
    description: "main card",
    cardType: EnumCard.PHYSICAL,
    cardFlag: EnumFlag.MASTERCARD,
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOSuccessReversalOff: CardDTO = {
    bankId: 1,
    description: "main card",
    cardType: EnumCard.VIRTUAL,
    cardFlag: EnumFlag.VISA,
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: 856.64
};

const cardDTOSuccessBalanceOff: CardDTO = {
    bankId: 1,
    description: "main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.ELO,
    cardLimit: 1500,
    currentLimit: 1500,
    reversal: false
};

const cardDTOFailedFlag = {
    bankId: 1,
    description: "main card",
    cardType: EnumCard.PHYSICAL,
    cardFlag: "MANCHESTER",
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOFailedType = {
    bankId: 1,
    description: "main card",
    cardType: "DIGITAL",
    cardFlag: EnumFlag.AMEX,
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOFailedDescription: CardDTO = {
    bankId: 1,
    description: "#Main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX,
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOFailedCardLimit: CardDTO = {
    bankId: 1,
    description: "Main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX,
    cardLimit: -1500,
    currentLimit: 1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOFailedCardCurrentLimit: CardDTO = {
    bankId: 1,
    description: "Main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX,
    cardLimit: 1500,
    currentLimit: -1500,
    balanceValue: 856.64,
    reversal: false
};

const cardDTOFailedCardBalance: CardDTO = {
    bankId: 1,
    description: "Main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX,
    cardLimit: 1500,
    currentLimit: 1500,
    balanceValue: -856.64,
    reversal: false
};

export const cardDTOS = {
    success: cardDTOSuccess,
    successNotReversal: cardDTOSuccessReversalOff,
    successNotBalance: cardDTOSuccessBalanceOff,
    errorFlag: cardDTOFailedFlag as CardDTO,
    errorType: cardDTOFailedType as CardDTO,
    errorDescription: cardDTOFailedDescription,
    errorLimit: cardDTOFailedCardLimit,
    errorCurrentLimit: cardDTOFailedCardCurrentLimit,
    errorBalance: cardDTOFailedCardBalance,
};
