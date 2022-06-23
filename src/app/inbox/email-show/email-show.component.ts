import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

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
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.params['id']);
  }

}
