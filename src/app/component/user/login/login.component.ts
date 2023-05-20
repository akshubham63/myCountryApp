import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;
  faGoogle = faGoogle;
  faGithub = faGithub;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isShowPass: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(loginForm: NgForm){
    if(loginForm.valid){
      this._authService.onLogin(loginForm.value.email, loginForm.value.password)
    }
  }

  onGoogleLogin(){
    this._authService.onGoogleLogin();
  }

  onGitLogin(){
    this._authService.onGitHubLogin();
  }

}
