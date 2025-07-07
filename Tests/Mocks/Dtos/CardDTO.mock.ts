import {CardDTO} from "@Dtos/CardDTO";
import {EnumCard} from "@Enums/EnumCard";
import {EnumFlag} from "@Enums/EnumFlag";

const cardDTOSuccess: CardDTO = {
    bankId: 1,
    description: "main card",
    cardType: EnumCard.PHYSICAL,
    cardFlag: EnumFlag.MASTERCARD,
    cardLimit: 1500,
    currentLimit: 1500
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
    cardFlag: EnumFlag.DINERS,
    currentLimit: -1500
};

export const cardDTOS = {
    success: cardDTOSuccess,
    errorFlag: cardDTOFailedFlag,
    errorType: cardDTOFailedType,
    errorDescription: cardDTOFailedDescription,
    errorLimit: cardDTOFailedCardLimit,
    errorCurrentLimit: cardDTOFailedCardCurrentLimit
};
