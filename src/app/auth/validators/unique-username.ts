import { catchError, map, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator{

  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;
    return this.authService.usernameAvailable(value)
    .pipe(
      map((value) => {
        return null;
      }),
      catchError((error) => {
        if(error.error.username){
          return of({ nonUniqueUsername: true });
        }else{
          return of({ noConnection: true });
        }
      })
    )
  }
}

