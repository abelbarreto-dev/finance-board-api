export class User {
    id: number = 0;
    name: string = "";
    lastName: string = "";
    email: string = "";
    username: string = "";
    password: string = "";
    active: boolean = true;
    mobile?: string;
    createAt?: Date;
    updateAt?: Date;
}
