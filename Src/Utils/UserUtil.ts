import {UserDTO} from "@Dtos/UserDTO";
import {UserException} from "@Exceptions/UserException";

export class UserUtil {
    private static checkName(name: string): void {
        const regLastName = (
            /^[A-Z][a-zA-Z- .]{1,30}[a-zA-Z.]$/
        );

        if (name.match(regLastName) === null) throw new UserException(
            "invalid characters found in name"
        );
    }

    private static checkLastName(lastName: string): void {
        const regName = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (lastName.match(regName) === null) throw new UserException(
            "invalid characters found in last name"
        );
    }

    private static checkUsername(username: string): void {
        const regUsername = (
            /^[a-z][a-z-_0-9]{1,254}$/
        );

        if (username.match(regUsername) === null) throw new UserException(
            "invalid characters found in username"
        );
    }

    private static checkEmail(email: string): void {
        const regEmail = (
            /^[a-z][a-z-_0-9.]{1,254}[a-z0-9]@[a-z0-9]{1,16}?.[a-z]{2,3}.[a-z0-9]{2,3}$/
        );

        if (email.match(regEmail) === null) throw new UserException(
            "invalid characters found in email"
        );
    }

    private static checkPassword(password: string): void {
        if (password.length < 8) throw new UserException(
            "password must be at least 8 characters long"
        );

        if (password.length > 32) throw new UserException(
            "password must be at most 32 characters long"
        );
    }

    private static checkMobile(mobile: string | null | undefined): void {
        if ([null, undefined, "test"].includes(mobile)) return

        const regMobile = (
            /^[0-9]{11,12}$/
        );

        const mobileNum: string = mobile as string;

        if (mobileNum.match(regMobile) === null) throw new UserException(
            "invalid mobile phone number"
        );
    }

    public static checkUser(user: UserDTO): void {
        this.checkName(user.name);
        this.checkLastName(user.lastName);
        this.checkEmail(user.email);
        this.checkUsername(user.username);
        this.checkPassword(user.password);
        this.checkMobile(user.mobile);
    }
}
