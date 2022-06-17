import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // signedin = false;
  signedIn$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService){
    // here or in ngOnInit... it is the same
    // this.authService.signedInBehSubj$.subscribe((signedin) => {
    //   this.signedin = signedin
    // })

    this.signedIn$ = this.authService.signedInBehSubj$;
  }

  ngOnInit(){
    // this.authService.signedInBehSubj$.subscribe((signedin) => {
    //    this.signedin = signedin
    // })

    this.authService.checkAuth().subscribe((response) => {
      console.log(response.authenticated)
    })
  }





  // https://api.angular-email.com

  // ng g m Auth --routing
  // ng g m Shared
  // ng g c auth/Signin
  // ng g c auth/Signup
  // ng g c shared/Input

  // ======== // Section 21: Custom Validators
  // 270 - 274
  // 275. Navigation Reminder
  // 276. Adding a Signup Form
  // 277. Adding Basic Styling ( npm i semantic-ui-css )
  // 278. Username and Password Validation
  // 279. Writing Custom Validators
      //  ng g class auth/validators/MatchPassword
  // 280. Connecting Custom Validators
  // 281. Implementing Async Validators
      //  ng g class auth/validators/UniqueUsername
  // 282. Nasty Async Validators
  // 283. Understanding Async Validators
  // 284. Handling Errors from Async Validation
  // 285. Building an Auth Service
      //  ng g service auth/Auth
  // 286. Another Reusable Input
  // 287. Robust Error Handling
  // 288. Customizing Input Type
  // 289. Fixing a Few Odds and Ends

  // ======== // Section 22: Handling Authentication
  // 290. Signup Process Overview
  // 291. Making the Signup Request
  // 292. Cleaning up the Auth Service
  // 293. + 294. Handling Signup Errors + Generic Error Handling
  // 295. Adding a Navigation Header
  // 296. + 297. Maintaining Authentication State + Oh No, More RxJs
  // 298. Using BehaviorSubjects
  // 299. The Async Pipe
  // 300. Exact Active Links ([routerLinkActiveOptions]='{ exact: true }')
  // 301. Checking Auth Status
}
