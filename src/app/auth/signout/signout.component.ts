import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // Navigate the user back to a signin page
      // or
      // to another component - hey you are signed out.

      this.router.navigateByUrl('/');
      // this.router.navigateByUrl('/sign-up'); - very inveresting!
      // загугли angular subscribe to route changes
      // https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular
      // https://www.angularjswiki.com/angular/how-to-detect-route-change-in-angular-with-examples/

    })
  }

}
