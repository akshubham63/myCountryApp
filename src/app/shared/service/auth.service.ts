import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from 'src/app/component/user/user.model';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<UserDetails | null> = new BehaviorSubject<UserDetails | null>(null);
  expirationTimer!: any;

  constructor(private _fireAuth: AngularFireAuth, 
      private _router: Router){}

  ngOnInit(): void {
      
  }

  // create user instance

  createUser(uid: string, email: string, token: string, isEmailVerified: boolean, expirationDate: number){
      const user = new UserDetails(uid, email, token, isEmailVerified, expirationDate);
      this.user.next(user);
      return user;
  }

  // login 

  async onLogin(email: string, password: string){

      try{
          let loginUser = await this._fireAuth.signInWithEmailAndPassword(email, password);
          this._onSuccessfullLoggedIN();
          console.log(loginUser);
          
      }catch(err){
          this._router.navigate(['/login']);
          this.user.next(null);
      }
  }

  // sign-up

  async onSignup(email: string, password: string){
      try{
          let userAccount = await this._fireAuth.createUserWithEmailAndPassword(email, password);
      }catch(err){
        
      }
  }

  // logout

  onLogout(){
      return this._fireAuth.signOut()
          .then(res => {
              this.user.next(null);
              localStorage.removeItem('user');
              this._router.navigate(['/login']);
              if(this.expirationTimer){
                  clearTimeout(this.expirationTimer);
              }
              this.expirationTimer = null;
          })
          .catch(err => {
              this.user.next(null);
              localStorage.removeItem('user');
              this._router.navigate(['/login']);
          });
  }


  //reset password

  resetPass(email: string){
      return this._fireAuth.sendPasswordResetEmail(email);
  }

  // email verification

  // emailVerification(user: any){
  
  // }

  // google login 

  async onGoogleLogin(){
      try{
          let userAccount = await this._fireAuth.signInWithPopup(new GoogleAuthProvider);
          this._onSuccessfullLoggedIN();
      }catch(err){
         
      }     
  }

  // gitHub Login

  async onGitHubLogin(){
      try{
          let userAccount = await this._fireAuth.signInWithPopup(new GithubAuthProvider);
          this._onSuccessfullLoggedIN();
      }catch(err){
          
      }
  }

  // Auto Logged in

  onAutoLoggedin(){
      const userData = JSON.parse(localStorage.getItem('user')!);
      if(!userData){
          return;
      }
      const loadUser = this.createUser(userData._uid, userData.email, userData._token, userData.isEmailVerified, userData.expirationTime);
      this.user.next(loadUser);
      this.onAutoLoggedout(userData.expirationTime - new Date().getTime());
  }

  // Auto Logged out

  onAutoLoggedout(expirationDuration: number){
      this.expirationTimer = setTimeout(() => {
          this.onLogout();
      }, expirationDuration);
  }

  // After successfull logged in

  private async _onSuccessfullLoggedIN(){
      try{
          let currentUser = await this._fireAuth.currentUser;
          let userData = await currentUser?.getIdTokenResult(true);
          let token = userData?.token;
          let expirationTime: number = (new Date(userData?.expirationTime!).getTime() + 3600 * 1000);
          let user = this.createUser(currentUser?.uid!, currentUser?.email!, token!, currentUser?.emailVerified!, expirationTime!);
          this.onAutoLoggedout(3600 * 1000); // in 1 hrs
          localStorage.setItem('user', JSON.stringify(user));
          this._router.navigate(['/home']);
      }catch(err){
          
      }
  }
}
