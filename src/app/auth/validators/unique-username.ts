import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator{
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    console.log(value);
    console.log(this.http);

    return value;
  }
}

