export class UserDetails{
    constructor(private _uid: string, public email: string, private _token: string, public isEmailVerified: boolean, private expirationTime: number){}

    get token(): string{
        return this.token;
    }
}