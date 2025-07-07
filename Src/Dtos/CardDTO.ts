import {EnumFlag} from "@Enums/EnumFlag";
import {EnumCard} from "@Enums/EnumCard";

export interface CardDTO {
    bankId: number;
    description: string;
    cardType: EnumCard;
    cardFlag: EnumFlag;
    cardLimit: number;
    currentLimit: number;
}
