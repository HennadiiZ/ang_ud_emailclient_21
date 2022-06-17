import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignupCredentials, SignupResponse, UsernameAvailableResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://api.angular-email.com";

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.url}/auth/username`, {
      username
    })
  }

  signup(formCredentials: SignupCredentials){
    return this.http.post<SignupResponse>(`${this.url}/auth/signup`, formCredentials)
  }
}
