import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'vm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginComplete = new EventEmitter<{success: boolean, username: string}>();
  closeButton!: HTMLElement;

  loginForm!: FormGroup;

  title = "Login";
  message!: string;
  // state 0 => initial
  // state 1 => login success
  // state 2 => login error
  state = 0;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.closeButton = document.querySelector("#loginClose") as HTMLElement;
    this.loginForm = this.formBuilder.group({
      username: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required
      ]]
    })
  }

  onLogin(){
    this.authService.loginUser(new User(this.username?.value, undefined, this.password?.value))
      .subscribe({
        next: (res) => {
          this.cookieService.set("token", res.token);
          this.closeButton.click();
          this.loginComplete.emit({success: true, username: this.username?.value})
          this.state = 1;
        },
        error: (error) => {
          this.title = "Login Failed";
          this.message = error.error.message;
          this.state = 2;
        }
      })
  }

  onClose() {
    setTimeout(() => this.resetView(), 200);
  }

  onBack() {
    this.resetView();
  }

  private resetView(): void {
    this.state = 0;
    this.title = "Login";
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
