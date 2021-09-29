import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'vm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerComplete: EventEmitter<boolean> = new EventEmitter();

  registerForm!: FormGroup;

  title = "Register";
  message: string | undefined;

  // state 0 => initial
  // state 1 => register success
  // state 2 => register error
  state = 0;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      username: ['',[
        Validators.required
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d!@#$%^&]{8,20}$/)
      ]]
    })
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      this.authService.registerUser(new User(this.username?.value, this.password?.value, this.email?.value)).subscribe({
        next: (resp) => {
          this.message = resp.message;
          this.title = "Success";
          this.state = 1;
        },
        error: (error) => {
          this.message = error.error.message;
          if(error.error.email_used && error.error.username_used) {
            this.registerForm.get('email')?.setErrors({
              emailUsed: true
            })
            this.registerForm.get('username')?.setErrors({
              usernameUsed: true
            })
          }
          else if(error.error.email_used) {
            this.registerForm.get('email')?.setErrors({
              emailUsed: true
            })
          }
          else if(error.error.username_used) {
            this.registerForm.get('username')?.setErrors({
              usernameUsed: true
            })
          }
          else {
            this.title = "Registration Failed"
            this.state = 2;
          }
        }
      })
    }
  }

  onClose(): void {
    setTimeout(() => {
      if(this.state === 1) {
        this.registerComplete.emit(true);
      }
      this.resetView();
    }, 200)
  }

  onBack(): void {
    this.resetView();
  }

  private resetView(): void {
    this.state = 0;
    this.title = "Register";
  }

  get email() {
    return this.registerForm.get('email');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }
}