export class AuthService {
    isAuth: boolean = false;

    signIn():Promise<boolean> {
        return new Promise(
            (resolve, reject)=>{
                setTimeout(
                    ()=>{
                        this.isAuth = true;
                        resolve(true);
                    }
                ),2000
            }
        )
    }

    signOut(): void {
        this.isAuth = false;
    }
}