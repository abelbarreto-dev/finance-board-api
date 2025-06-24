import {BaseException} from "@Exceptions/BaseException";

export class WordUtil {
    public static checkFirstName<T extends BaseException>(
        name: string, except: T
    ): void {
        const regLastName = (
            /^[A-Z][a-zA-Z- .]{1,30}[a-zA-Z.]$/
        );

        if (name.match(regLastName) === null) throw except;
    }

    public static checkLastName<T extends BaseException>(
        lastName: string, except: T
    ): void {
        const regName = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (lastName.match(regName) === null) throw except;
    }

    /**
     * Make check about description characters and length.
     *
     * It uses a Regex.
     *
     * Where: length is a parameter -> consider length + 2 to the total length expect.
     * @param description the data to be checked
     * @param length the max. length expect to description
     * @param except the exception to be thrown if it does not match
     */
    public static checkDescription<T extends BaseException>(
        description: string, length: number, except: T
    ): void {
        const regDescription = (
            `^[a-zA-Z_0-9][a-zA-Z-_ ,.0-9]{1,${length}}[a-zA-Z.0-9]$`
        );

        if (description.match(regDescription) === null) throw except;
    }
}
