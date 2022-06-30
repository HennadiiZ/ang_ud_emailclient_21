import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/interfaces';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  
  email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    // from: 'test11@angular-email.com',
    from: '',
  };

  constructor() {
    // this.email = {
    //   id: '',
    //   to: '',
    //   subject: '',
    //   html: '',
    //   text: '',
    //   // from: 'test11@angular-email.com',
    //   from: '',
    // }
  }

  ngOnInit(): void {
  }

}
