import {EnumPix} from "@Enums/EnumPix";

export class PixKey {
    id: number = 0;
    bankId: number = 0;
    name: string = "";
    typeKey: EnumPix = EnumPix.cpf;
    pixKey: string = "";
    createdAt?: Date;
    updatedAt?: Date;
}
