import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from 'src/app/interfaces';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: any;

  // email: Email = {
  //   id: '',
  //   to: '',
  //   subject: '',
  //   html: '',
  //   text: '',
  //   from: 'test11@angular-email.com',
  //   // from: '',
  // };

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`,
    }
  }

  ngOnInit(): void {
  }

  onSubmit(email: Email): void {
    this.emailService.sendEmail(email).subscribe(email => {
      this.showModal = false;
    });
  }

}
