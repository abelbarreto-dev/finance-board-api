import {UserDTO} from "@Dtos/UserDTO";
import {UserException} from "@Exceptions/UserException";
import {WordUtil} from "@Utils/WordUtil";

export class UserUtil {
    private static checkFirstName(name: string): void {
        const except = new UserException("invalid characters found in first name or length");

        WordUtil.checkFirstName<UserException>(name, except);
    }

    private static checkLastName(lastName: string): void {
        const except = new UserException("invalid characters found in last name or length");

        WordUtil.checkLastName<UserException>(lastName, except);
    }

    private static checkUsername(username: string): void {
        const regUsername = (
            /^[a-z][a-z-_0-9]{1,254}$/
        );

        const except = new UserException("invalid characters found in username or length");

        if (username.match(regUsername) === null) throw except;
    }

    private static checkEmail(email: string): void {
        const regEmail = (
            /^[a-z][a-z-_0-9.]{1,254}[a-z0-9]@[a-z0-9]{1,16}?.[a-z]{2,3}.[a-z0-9]{2,3}$/
        );

        const except = new UserException("invalid characters found in email or length");

        if (email.match(regEmail) === null) throw except
    }

    private static checkPassword(password: string): void {
        const except = new UserException("invalid characters found in password or length");

        const regPassword = /^[\S+]{8,32}$/;

        if (password.match(regPassword) === null) throw except
    }

    private static checkMobile(mobile?: string): void {
        if (!mobile) return;
        const phoneNumber: string = mobile.toString();

        const regMobile = (
            /^[0-9]{11,13}$/
        );

        const except = new UserException("invalid characters found in mobile phone number or length");

        if (phoneNumber.match(regMobile) === null) throw except;
    }

    public static checkUser(user: UserDTO): void {
        this.checkFirstName(user.name);
        this.checkLastName(user.lastName);
        this.checkEmail(user.email);
        this.checkUsername(user.username);
        this.checkPassword(user.password);
        this.checkMobile(user.mobile);
    }
}
