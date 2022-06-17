import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SignedinResponse, SigninResponse, SignupCredentials, SignupResponse, UsernameAvailableResponse } from '../interfaces';

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

  signin(formCredentials: SigninResponse){
    return this.http.post<SigninResponse>(
      `${this.url}/auth/signin`,
      formCredentials,
    ).pipe(
      tap(() => {
        this.signedInBehSubj$.next(true);
      })
    )
  }

  checkAuth(){
    return this.http.get<SignedinResponse>(
      `${this.url}/auth/signedin`,
      // { withCredentials: true }
    )
    .pipe(
      tap(({ authenticated }) => {
        // console.log(response);

        // this.signedInBehSubj$.next(authenticated); // not working
        // console.log(authenticated);

        this.signedInBehSubj$.next(true); // rewriting to my way. Looks like it is working now
        console.log(authenticated); // always false ???
      })
    );
  }

  signout(){
    // this.signedInBehSubj$.next(false);
    return this.http.post<any>(`${this.url}/auth/signout`, {})
          .pipe(
            tap(() => {
              this.signedInBehSubj$.next(false);
            })
          )
  }
}
