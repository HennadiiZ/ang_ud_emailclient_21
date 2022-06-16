import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator{
  url = "https://api.angular-email.com";
  
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    // console.log(value);
    // console.log(this.http);
    return this.http.post<any>(`${this.url}/auth/username`, { username: value })
  }
}

