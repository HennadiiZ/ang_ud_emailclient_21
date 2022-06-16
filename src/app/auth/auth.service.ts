import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://api.angular-email.com";

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<{message: string}>(`${this.url}/auth/username`, {
      username
    })
  }
}
