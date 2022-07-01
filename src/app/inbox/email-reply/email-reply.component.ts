import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/interfaces';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {
  showModal: boolean = false;
  email!: Email;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(email: Email) {

  }
}
