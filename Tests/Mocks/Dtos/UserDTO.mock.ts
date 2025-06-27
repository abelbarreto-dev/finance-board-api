import {UserDTO} from "@Dtos/UserDTO";

const userDTOSuccessOne: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true
};

const userDTOSuccessTwo: UserDTO = {
    ...userDTOSuccessOne,
    mobile: "5511974234798"
};

const userDTOFailedName: UserDTO = {
    ...userDTOSuccessTwo,
    name: ""
};

const userDTOFailedLastName: UserDTO = {
    ...userDTOSuccessTwo,
    lastName: ""
};

const userDTOFailedEmail: UserDTO = {
    ...userDTOSuccessTwo,
    email: "paulo.nunes-gmail.com"
};

const userDTOFailedUsername: UserDTO = {
    ...userDTOSuccessTwo,
    username: "25user_name58"
};

const userDTOFailedPassword: UserDTO = {
    ...userDTOSuccessTwo,
    password: "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.",
};

const userDTOFailedMobile: UserDTO = {
    ...userDTOSuccessTwo,
    mobile: "551197423479B"
};

export const userDTOS = {
    successPhone: userDTOSuccessTwo,
    successNotPhone: userDTOSuccessOne,
    failedFirstName: userDTOFailedName,
    failedLastName: userDTOFailedLastName,
    failedEmail: userDTOFailedEmail,
    failedUsername: userDTOFailedUsername,
    failedPassword: userDTOFailedPassword,
    failedMobile: userDTOFailedMobile
};
