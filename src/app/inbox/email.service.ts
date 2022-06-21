import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSummary } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = "https://api.angular-email.com";

  constructor(
    private http: HttpClient,
  ) { }

  getEmails(){
    return this.http.get<EmailSummary[]>(`${this.url}/emails`);
  }


}
