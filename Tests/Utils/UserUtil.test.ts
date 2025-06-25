import {UserUtil} from "@Utils/UserUtil";
import {userDTOS} from "@MocksDtos/UserDTO.mock";
import {UserException} from "@Exceptions/UserException";

describe("UserUtil", () => {
    let message: string = "";

    test("User Success With Mobile Phone Number", () => {
        const testSuccess = expect(() => {
            UserUtil.checkUser(userDTOS.successPhone);
        });

        testSuccess.not.toThrow(UserException);
    });

    test("User Success Without Mobile Phone Number", () => {
        const testSuccess = expect(() => {
            UserUtil.checkUser(userDTOS.successNotPhone);
        });

        testSuccess.not.toThrow(UserException);
    });

    test("User Failed First Name", () => {
        message = "invalid characters found in first name or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedFirstName);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Last Name", () => {
        message = "invalid characters found in last name or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedLastName);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Email", () => {
        message = "invalid characters found in email or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedEmail);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Username", () => {
        message = "invalid characters found in username or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedUsername);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Password", () => {
        message = "invalid characters found in password or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedPassword);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Mobile Phone Number", () => {
        message = "invalid characters found in mobile phone number or length";

        const testExcept = expect(() => {
            UserUtil.checkUser(userDTOS.failedMobile);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });

    test("User Failed Mobile Phone Number - Length Test", () => {
        message = "invalid characters found in mobile phone number or length";
        const failedMobile = userDTOS.successPhone;
        failedMobile.mobile += "4";

        const testExcept = expect(() => {
            UserUtil.checkUser(failedMobile);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(UserException);
    });
});
