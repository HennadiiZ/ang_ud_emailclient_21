import { catchError, map, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator{
  url = "https://api.angular-email.com";

  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    // console.log(value);
    // console.log(this.http);
    return this.http.post<any>(`${this.url}/auth/username`, { username: value })
    .pipe(
      map((value) => {
        // if(value.available) {
        //   return null;
        // }
        return null;
      }),
      catchError((error) => {
        // console.log(error);
        if(error.error.username){
          return of({ nonUniqueUsername: true });
        }else{
          return of({ noConnection: true });
        }

      })
    )
  }
}

