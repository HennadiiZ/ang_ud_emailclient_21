import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emailclient_21';
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
}
