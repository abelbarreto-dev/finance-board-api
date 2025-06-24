import {PixKeyException} from "@Exceptions/PixKeyException";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {EnumPix} from "@Enums/EnumPix";
import {WordUtil} from "@Utils/WordUtil";
import {EnumUtil} from "@Utils/EnumUtil";

export class PixKeyUtil {
    private static except: PixKeyException = new PixKeyException("");

    private static checkPixKeyName(pixKeyName: string): void {
        this.except.message = "invalid name pix key characters or length";

        WordUtil.checkDescription<PixKeyException>(pixKeyName, 253, this.except);
    }

    private static checkEmail(email: string): void {
        const regEmail = (
            /^[a-z][a-z-_0-9.]{1,254}[a-z0-9]@[a-z0-9]{1,16}?.[a-z]{2,3}.[a-z0-9]{2,3}$/
        );

        this.except.message = "invalid email pix key characters or length";

        if (email.match(regEmail) === null) throw this.except;
    }

    private static checkCpf(cpf: string): void {
        const regCpf = (
            /^[0-9]{11}$/
        );

        this.except.message = "invalid cpf pix key characters or length";

        if (cpf.match(regCpf) === null) throw this.except;
    }

    private static checkCnpj(cnpj: string): void {
        const regCnpj = (
            /^[0-9]{14}$/
        );

        this.except.message = "invalid cnpj pix key characters or length";

        if (cnpj.match(regCnpj) === null) throw this.except;
    }

    private static checkMobile(mobile: string): void {
        const regMobile = (
            /^[0-9]{12}$/
        );

        this.except.message = "invalid mobile phone number pix key characters or length";

        if (mobile.match(regMobile) === null) throw this.except;
    }

    private static checkRandom(random: string): void {
        const regRandom = (
            /^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/
        );

        this.except.message = "invalid random pix key characters or length";

        if (random.match(regRandom) === null) throw this.except;
    }

    public static checkPixKey(pixKey: PixKeyDTO): void {
        const checkers: {[index: string]: any} = {...EnumPix};

        this.except.message = "invalid pix key type found";

        EnumUtil.checkEnumKey<PixKeyException>(pixKey.typeKey, checkers, this.except);

        this.checkPixKeyName(pixKey.name);
        checkers[EnumPix.CPF] = this.checkCpf;
        checkers[EnumPix.CNPJ] = this.checkCnpj;
        checkers[EnumPix.PHONE] = this.checkMobile;
        checkers[EnumPix.EMAIL] = this.checkEmail;
        checkers[EnumPix.RANDOM] = this.checkRandom;

        checkers[pixKey.typeKey](pixKey.pixKey);
    }
}
