import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Email } from '../interfaces';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>  {

  constructor( private emailService: EmailService ) { }

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
    return this.emailService.getEmail(id);
  }
}
