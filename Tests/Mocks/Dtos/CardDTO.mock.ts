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

const cardDTOFailedFlag: CardDTO = {
    ...cardDTOSuccess,
    cardType: EnumCard.PHYSICAL,
    cardFlag: "MANCHESTER" as EnumFlag
};

const cardDTOFailedType: CardDTO = {
    ...cardDTOSuccess,
    cardType: "DIGITAL" as EnumCard,
    cardFlag: EnumFlag.AMEX
};

const cardDTOFailedDescription: CardDTO = {
    ...cardDTOSuccess,
    description: "#Main card",
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX
};

const cardDTOFailedCardLimit: CardDTO = {
    ...cardDTOSuccess,
    cardType: EnumCard.TEMPORARY,
    cardFlag: EnumFlag.AMEX,
    cardLimit: -1500
};

const cardDTOFailedCardCurrentLimit: CardDTO = {
    ...cardDTOSuccess,
    currentLimit: -1500
};

const cardDTOFailedCardBalance: CardDTO = {
    ...cardDTOSuccess,
    cardFlag: EnumFlag.AMEX,
    balanceValue: -856.64
};

export const cardDTOS = {
    success: cardDTOSuccess,
    successNotReversal: cardDTOSuccessReversalOff,
    successNotBalance: cardDTOSuccessBalanceOff,
    errorFlag: cardDTOFailedFlag,
    errorType: cardDTOFailedType,
    errorDescription: cardDTOFailedDescription,
    errorLimit: cardDTOFailedCardLimit,
    errorCurrentLimit: cardDTOFailedCardCurrentLimit,
    errorBalance: cardDTOFailedCardBalance,
};
