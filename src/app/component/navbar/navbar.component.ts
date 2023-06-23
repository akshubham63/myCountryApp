import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isShowProfile: boolean = false;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;
  isAuthenticated: boolean = false;
  userSub!: Subscription;
  constructor(private _authService: AuthService) { }

  onLogout(){
    this.userProfileShow();
    this._authService.onLogout();
  }

  ngOnInit(): void {
    this.userSub = this._authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  userProfileShow(){
    this.isShowProfile = !this.isShowProfile;
  } 

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
