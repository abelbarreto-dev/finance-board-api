import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";

const successOperaBank: OperaBankDTO = {
    bankId: 1,
    description: "description of operation transfer",
    typeTransfer: EnumTransfer.PIX,
    state: EnumOpState.OTHERS,
    bankOperation: EnumFinancePlus.DEPOSIT,
    senderName: "Paula",
    receiverName: "Lucia",
    balanceValue: 750
};

const failedOperaBankTypeTransfer: OperaBankDTO = {
    ...successOperaBank,
    typeTransfer: "TRANSFER_NOW" as EnumTransfer
};

const failedOperaBankState: OperaBankDTO = {
    ...successOperaBank,
    state: "LOS_ANGELES" as EnumOpState
};

const failedOperaBankBankOperation: OperaBankDTO = {
    ...successOperaBank,
    bankOperation: "TRANSFER_NOW" as EnumFinancePlus
};

const failedOperaBankDescriptionCharacter: OperaBankDTO = {
    ...successOperaBank,
    description: "#bank operation description"
};

const failedOperaBankDescriptionLengthMax: OperaBankDTO = {
    ...successOperaBank,
    description: "Ts".repeat(128)
};

const failedOperaBankDescriptionLengthMin: OperaBankDTO = {
    ...successOperaBank,
    description: "Ts"
};

const failedOperaBankSenderNameCharacter: OperaBankDTO = {
    ...successOperaBank,
    senderName: "paula"
};

const failedOperaBankSenderNameNotAlphaNum: OperaBankDTO = {
    ...successOperaBank,
    senderName: "Paul#"
};

const failedOperaBankSenderNameLengthMax: OperaBankDTO = {
    ...successOperaBank,
    senderName: "Eva".repeat(11)
};

const failedOperaBankSenderNameLengthMin: OperaBankDTO = {
    ...successOperaBank,
    senderName: "I"
};

const failedOperaBankReceiverNameCharacter: OperaBankDTO = {
    ...successOperaBank,
    receiverName: "lucia"
};

const failedOperaBankReceiverNameNotAlphaNum: OperaBankDTO = {
    ...successOperaBank,
    receiverName: "Paul#"
};

const failedOperaBankReceiverNameLengthMax: OperaBankDTO = {
    ...successOperaBank,
    receiverName: "Eva".repeat(11)
};

const failedOperaBankReceiverNameLengthMin: OperaBankDTO = {
    ...successOperaBank,
    receiverName: "I"
};

const failedOperaBankBalanceNegative: OperaBankDTO = {
    ...successOperaBank,
    balanceValue: -0.0001
};

export const operaBankDTOS = {
    success: successOperaBank,
    failedTypeTransfer: failedOperaBankTypeTransfer,
    failedState: failedOperaBankState,
    failedBankOperation: failedOperaBankBankOperation,
    failedDescriptionCharacter: failedOperaBankDescriptionCharacter,
    failedDescriptionLengthMax: failedOperaBankDescriptionLengthMax,
    failedDescriptionLengthMin: failedOperaBankDescriptionLengthMin,
    failedSenderNameCharacter: failedOperaBankSenderNameCharacter,
    failedSenderNameNotAlphaNum: failedOperaBankSenderNameNotAlphaNum,
    failedSenderNameLengthMax: failedOperaBankSenderNameLengthMax,
    failedSenderNameLengthMin: failedOperaBankSenderNameLengthMin,
    failedReceiverNameCharacter: failedOperaBankReceiverNameCharacter,
    failedReceiverNameNotAlphaNum: failedOperaBankReceiverNameNotAlphaNum,
    failedReceiverNameLengthMax: failedOperaBankReceiverNameLengthMax,
    failedReceiverNameLengthMin: failedOperaBankReceiverNameLengthMin,
    failedBalanceNegative: failedOperaBankBalanceNegative
};
