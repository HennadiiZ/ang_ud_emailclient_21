import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Email } from 'src/app/interfaces';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) {
    console.log(this.activatedRoute.snapshot.data);
    // this.email = this.activatedRoute.snapshot.data['email'];
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute)
    // this.activatedRoute.params.subscribe(snapshot => {
    //   // console.log(snapshot);
    //   // this.emailService.getEmail(id);
    // })

    // there are two ways:

    // 1 way
    // this.activatedRoute.params.subscribe(value => {
    //   console.log(value);
    // })

    // 2 way
    // console.log(this.activatedRoute.snapshot);
    // console.log(this.activatedRoute.snapshot.params['id']);

    // 332. Snapshot vs Observable Route Params
    // setInterval(() => {
    //   console.log(this.activatedRoute.snapshot.params['id']);
    // }, 1000);

    // 333. Issues with Nested Subscribes
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email);
    //   });
    // });

    // 334. Canceling Previous Email Requests
    // this.activatedRoute.params
    // .pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe((email) => {
    //   console.log(email);
    //   this.email = email;
    // })
  }

}
