import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/interfaces';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {
  showModal: boolean = false;
  @Input() email!: Email;

  constructor() { }

  ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ')
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n----- ${this.email.from}  wrote:\n> ${text}`
    }
  }

  onSubmit(email: Email) {

  }
}
