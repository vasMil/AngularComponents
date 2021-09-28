import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  state = 0;
  username!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterComplete(success: boolean){
    if(success) {
      this.state = 1
    }
  }

  onLoginComplete(loginResp: {success: boolean, username: string}) {
    if(loginResp.success) {
      this.username = loginResp.username
      this.state = 2;
    }
  }
}
