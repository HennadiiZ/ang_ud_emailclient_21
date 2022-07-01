import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, EmailSummary } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url = "https://api.angular-email.com";

  constructor( private http: HttpClient ) {}

  getEmails(){
    return this.http.get<EmailSummary[]>(`${this.url}/emails`);
  }

  getEmail(id: string){
    return this.http.get<Email>(`${this.url}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post<Email>(`${this.url}`, email)
  }

}
