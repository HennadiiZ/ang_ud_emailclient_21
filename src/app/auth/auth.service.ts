import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SignupCredentials, SignupResponse, UsernameAvailableResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://api.angular-email.com";
  signedInBehSubj$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.url}/auth/username`, {
      username
    })
  }

  signup(formCredentials: SignupCredentials){
    return this.http.post<SignupResponse>(
      `${this.url}/auth/signup`,
      formCredentials,
      // { withCredentials: true }
    ).pipe(
      tap(() => {
        this.signedInBehSubj$.next(true);
      })
    )
  }

  checkAuth(){
    return this.http.get<any>(
      `${this.url}/auth/signedin`,
      // { withCredentials: true }
    )
    .pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }
}
