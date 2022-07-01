import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Email } from 'src/app/interfaces';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnChanges {
  showModal: boolean = false;
  @Input() email!: Email;

  constructor( private emailService: EmailService ) { }

  // ngOnInit(): void {
  //   const text = this.email.text.replace(/\n/gi, '\n> ')
  //   this.email = {
  //     ...this.email,
  //     from: this.email.to,
  //     to: this.email.from,
  //     subject: `RE: ${this.email.subject}`,
  //     text: `\n\n\n----- ${this.email.from}  wrote:\n> ${text}`
  //   };
  // }

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ')
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n----- ${this.email.from}  wrote:\n> ${text}`
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
