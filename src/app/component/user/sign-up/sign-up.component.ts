import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isShowPass: boolean = false;
  isShowConfirmPass: boolean = false;

  mySignUpForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _authService: AuthService) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.mySignUpForm = this._fb.group({
      fname: [null, [Validators.required]],
      lname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: [null, [Validators.required]],
      confirmPass: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      isTermAccepted: [null, [Validators.required]]
    });
  }

  onSignUp(){
    if(this.mySignUpForm.valid){
      this._authService.onSignup(this.mySignUpForm.value.email, this.mySignUpForm.value.password);
    }
  }

  get isFormValid(){
    if(!this.mySignUpForm.valid && this.mySignUpForm.dirty){
      return false;
    }
    return true;
  }
}
