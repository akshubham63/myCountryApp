import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
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
