import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Email } from '../interfaces';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>  {

  constructor( private emailService: EmailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route);
    const { id } = route.params;

    // return {
    //   id: 'string',
    //   subject: 'string',
    //   text: 'string',
    //   to: 'string',
    //   from: 'string',
    //   html: 'string',
    // }
    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
