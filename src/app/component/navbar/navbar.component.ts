import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
