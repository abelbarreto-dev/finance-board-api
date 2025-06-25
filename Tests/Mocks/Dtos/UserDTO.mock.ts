import {UserDTO} from "@Dtos/UserDTO";

const userDTOSuccessOne: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "5511974234798"
};

const userDTOSuccessTwo: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true
};

const userDTOFailedName: UserDTO = {
    name: "",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "5511974234798"
};

const userDTOFailedLastName: UserDTO = {
    name: "Paulo",
    lastName: "",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "5511974234798"
};

const userDTOFailedEmail: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes-gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "5511974234798"
};

const userDTOFailedUsername: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "25user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "5511974234798"
};

const userDTOFailedPassword: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.",
    active: true,
    mobile: "5511974234798"
};

const userDTOFailedMobile: UserDTO = {
    name: "Paulo",
    lastName: "Nunes",
    email: "paulo.nunes@gmail.com",
    username: "user_name58",
    password: "aBc&123456789",
    active: true,
    mobile: "551197423479B"
};

export const userDTOS = {
    successPhone: userDTOSuccessOne,
    successNotPhone: userDTOSuccessTwo,
    failedFirstName: userDTOFailedName,
    failedLastName: userDTOFailedLastName,
    failedEmail: userDTOFailedEmail,
    failedUsername: userDTOFailedUsername,
    failedPassword: userDTOFailedPassword,
    failedMobile: userDTOFailedMobile
};
