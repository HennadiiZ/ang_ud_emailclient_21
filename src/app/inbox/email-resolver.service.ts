import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Email } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>  {

  constructor() { }

  resolve() {
    return {
      id: 'string',
      subject: 'string',
      text: 'string',
      to: 'string',
      from: 'string',
      html: 'string',
     }
  }
}
