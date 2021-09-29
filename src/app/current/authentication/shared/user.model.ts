export class User {
    id: number | undefined;
    username: string;
    email: string | undefined;
    private _password: string;

    constructor(
        username: string,  
        password: string, 
        email: string | undefined = undefined,
        id: number | undefined = undefined) 
        {
            this.id = id || undefined;
            this.username = username;
            this.email = email;
            this._password = password;
    }

    static fromJSON(obj: {
        username: string, 
        password: string, 
        email: string, 
        id: number, 
        has_voted: boolean
    }): User {
        return new User(obj.username, obj.password, obj.email, obj.id);
    }

    toJSON(): object {
        let basicObj = new Object({
            "username": this.username,
            "password": this._password,
            "email": this.email,
        });
        this.id !== undefined ? basicObj = {
            ...basicObj,
            "id": this.id
        } : null;
        return basicObj;
    }

    set password(pass: string) {
        this._password = pass;
    }
}