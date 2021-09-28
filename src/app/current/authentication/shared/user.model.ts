export class User {
    id: number | undefined;
    username: string;
    email: string | undefined;
    password: string;

    constructor(username: string, email: string | undefined, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    toJSON(): object {
        return {
            "username": this.username,
            "password": this.password,
            "email": this.email
        }
    }
}