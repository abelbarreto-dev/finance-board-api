import {PixKeyException} from "@Exceptions/PixKeyException";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {EnumPix} from "@Enums/EnumPix";

export class PixKeyUtil {
    private static checkPixKeyName(pixKeyName: string): void {
        const regName = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (pixKeyName.match(regName) === null) throw new PixKeyException(
            "invalid name pix key"
        );
    }

    private static checkEmail(email: string): void {
        const regEmail = (
            /^[a-z][a-z-_0-9.]{1,254}[a-z0-9]@[a-z0-9]{1,16}?.[a-z]{2,3}.[a-z0-9]{2,3}$/
        );

        if (email.match(regEmail) === null) throw new PixKeyException (
            "invalid email pix key"
        );
    }

    private static checkCpf(cpf: string): void {
        const regCpf = (
            /^[0-9]{11}$/
        );

        if (cpf.match(regCpf) === null) throw new PixKeyException (
            "invalid cpf pix key"
        );
    }

    private static checkCnpj(cnpj: string): void {
        const regCnpj = (
            /^[0-9]{14}$/
        );

        if (cnpj.match(regCnpj) === null) throw new PixKeyException (
            "invalid cnpj pix key"
        );
    }

    private static checkMobile(mobile: string): void {
        const regMobile = (
            /^[0-9]{12}$/
        );

        if (mobile.match(regMobile) === null) throw new PixKeyException(
            "invalid mobile number pix key"
        );
    }

    private static checkRandom(random: string): void {
        const regRandom = (
            /^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/
        );

        if (random.match(regRandom) === null) throw new PixKeyException(
            "invalid random pix key"
        );
    }

    public static checkPixKey(pixKey: PixKeyDTO): void {
        const checkers: {[index: string]: any} = {...EnumPix};

        if (!Object.keys(checkers).includes(pixKey.typeKey)) throw new PixKeyException(
            "invalid pix key type found"
        );

        this.checkPixKeyName(pixKey.name);
        checkers[EnumPix.CPF] = this.checkCpf;
        checkers[EnumPix.CNPJ] = this.checkCnpj;
        checkers[EnumPix.PHONE] = this.checkMobile;
        checkers[EnumPix.EMAIL] = this.checkEmail;
        checkers[EnumPix.RANDOM] = this.checkRandom;

        checkers[pixKey.typeKey](pixKey.pixKey);
    }
}
