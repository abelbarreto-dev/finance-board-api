import {PixKeyException} from "@Exceptions/PixKeyException";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {EnumPix} from "@Enums/EnumPix";
import {WordUtil} from "@Utils/WordUtil";
import {EnumUtil} from "@Utils/EnumUtil";
import {MobileUtil} from "@Utils/MobileUtil";
import {EmailUtil} from "@Utils/EmailUtil";

export class PixKeyUtil {
    private static checkPixKeyName(pixKeyName: string): void {
        const except = new PixKeyException("invalid name pix key characters or length");

        WordUtil.checkDescription<PixKeyException>(pixKeyName, 253, except);
    }

    private static checkEmail(email: string): void {
        const except = new PixKeyException("invalid email pix key characters or length");

        EmailUtil.checkEmail<PixKeyException>(email, except);
    }

    private static checkCpf(cpf: string): void {
        const regCpf = (
            /^[0-9]{11}$/
        );

        const except = new PixKeyException("invalid cpf pix key characters or length");

        if (cpf.match(regCpf) === null) throw except;
    }

    private static checkCnpj(cnpj: string): void {
        const regCnpj = (
            /^[0-9]{14}$/
        );

        const except = new PixKeyException("invalid cnpj pix key characters or length");

        if (cnpj.match(regCnpj) === null) throw except;
    }

    private static checkMobile(mobile: string): void {
        const except = new PixKeyException("invalid mobile phone number pix key characters or length");

        MobileUtil.checkMobile<PixKeyException>(mobile, except);
    }

    private static checkRandom(random: string): void {
        const regRandom = (
            /^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/
        );

        const except = new PixKeyException("invalid random pix key characters or length");

        if (random.match(regRandom) === null) throw except;
    }

    public static checkPixKey(pixKey: PixKeyDTO): void {
        const checkers: {[index: string]: any} = {...EnumPix};

        const except = new PixKeyException("invalid pix key type found");

        EnumUtil.checkEnumKey<PixKeyException>(pixKey.typeKey, checkers, except);

        this.checkPixKeyName(pixKey.name);
        checkers[EnumPix.CPF] = this.checkCpf;
        checkers[EnumPix.CNPJ] = this.checkCnpj;
        checkers[EnumPix.PHONE] = this.checkMobile;
        checkers[EnumPix.EMAIL] = this.checkEmail;
        checkers[EnumPix.RANDOM] = this.checkRandom;

        checkers[pixKey.typeKey](pixKey.pixKey);
    }
}
