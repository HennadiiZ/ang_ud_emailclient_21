import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from 'src/app/interfaces';

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

  constructor( private authService: AuthService ) {
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

}
