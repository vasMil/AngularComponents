import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './shared/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(newUser: User): Observable<any> {
    return this.http.post<User>("http://localhost:8080/register", newUser.toJSON());
  }

  usernameUsed(username: string) {
    return this.http.post("http://localhost:8080/username_used", {username: username});
  }
}
