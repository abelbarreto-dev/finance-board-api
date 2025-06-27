import {EnumPix} from "@Enums/EnumPix";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";

const pixKeyDTOSuccessCPF: PixKeyDTO = {
    bankId: 1,
    name: "real financer",
    typeKey: EnumPix.CPF,
    pixKey: "11122233344"
};

const pixKeyDTOSuccessCNPJ: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    typeKey: EnumPix.CNPJ,
    pixKey: "11122233344555"
};

const pixKeyDTOSuccessEMAIL: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    typeKey: EnumPix.EMAIL,
    pixKey: "paulo.nunes@gmail.com"
};

const pixKeyDTOSuccessPHONE: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    typeKey: EnumPix.PHONE,
    pixKey: "5511974683072"
};

const pixKeyDTOSuccessRANDOM: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    typeKey: EnumPix.RANDOM,
    pixKey: "JAfdn5a9-5a95-4a9d-a5K1-92a5d5A95aFd"
};

const pixKeyDTOFailedType = {
    ...pixKeyDTOSuccessRANDOM,
    typeKey: "UNITED",
    pixKey: "JAfdn5a9-5a95-4a9d-a5K1-92a5d5A95aFd"
};

const pixKeyDTOFailedName: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    name: "x ".repeat(135)
};

const pixKeyDTOFailedCPF: PixKeyDTO = {
    ...pixKeyDTOSuccessCPF,
    pixKey: "111222333448"
};

const pixKeyDTOFailedCNPJ: PixKeyDTO = {
    ...pixKeyDTOSuccessCNPJ,
    pixKey: "1112223334455H"
};

const pixKeyDTOFailedEMAIL: PixKeyDTO = {
    ...pixKeyDTOSuccessEMAIL,
    pixKey: "paulo.nunes.gmail.com"
};

const pixKeyDTOFailedPHONE: PixKeyDTO = {
    ...pixKeyDTOSuccessPHONE,
    pixKey: "55119746830728"
};

const pixKeyDTOFailedRANDOM: PixKeyDTO = {
    ...pixKeyDTOSuccessRANDOM,
    pixKey: "JAfdn5a9-5a95-4a9d-a5K1-92a5d5A95aF#"
};

export const pixKeyDTOS = {
    successCPF: pixKeyDTOSuccessCPF,
    successCNPJ: pixKeyDTOSuccessCNPJ,
    successEMAIL: pixKeyDTOSuccessEMAIL,
    successPHONE: pixKeyDTOSuccessPHONE,
    successRANDOM: pixKeyDTOSuccessRANDOM,
    errorType: pixKeyDTOFailedType as PixKeyDTO,
    errorName: pixKeyDTOFailedName,
    errorCPF: pixKeyDTOFailedCPF,
    errorCNPJ: pixKeyDTOFailedCNPJ,
    errorEMAIL: pixKeyDTOFailedEMAIL,
    errorPHONE: pixKeyDTOFailedPHONE,
    errorRANDOM: pixKeyDTOFailedRANDOM,
};
