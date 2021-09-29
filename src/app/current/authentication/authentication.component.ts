import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { User } from './shared/user.model';

@Component({
  selector: 'vm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  state = 0;
  currentUser!: User;

  constructor(private cookieService: CookieService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.cookieService.get('token')) {
      this.authService.getUser(this.cookieService.get('token')).subscribe({
        next: () => {
          this.currentUser = this.authService.currentUser;
          this.state = 2;
        },
        error: (err) => this.state = 0
      })
    }
  }

  onRegisterComplete(success: boolean){
    if(success) {
      this.state = 1
    }
  }

  onLoginComplete(loginResp: {success: boolean, user: User}) {
    if(loginResp.success) {
      this.currentUser = loginResp.user;
      this.state = 2;
    }
  }

  onProfile() {
    console.log(this.currentUser);
  }

  
}
