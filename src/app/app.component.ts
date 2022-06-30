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
      // console.log(response.authenticated)
    })
  }

  signOut() {
    this.authService.signout().subscribe((response) => {

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
  // 302. A Gotcha Around the HttpClient ({ withCredentials: true } - did nit work for me. No cookies)
  // 303. HTTP Interceptors (ng g class auth/AuthHttpInterceptor)
  // 304. Wiring up an Interceptor
  // 305. 306. Modifying Outgoing Requests +  Other Uses of Interceptors
  // 307. A Little Record Keeping
  // 308. Adding Sign Out
  // 309. Automated Signouts / ng g c auth/Signout --skip-tests
  // 310. Programmatic Navigation (router: Router) - very inveresting
  // 311. Building the Sign In Flow
  // 312. Sign In Authentication
  // 313. Showing Authentication Errors
  // 314. Inbox Module Design / (ng g m Inbox --routing) / (ng g c inbox/Home)
  // 315. Navigation on Authentication

  // ======== // Section 23: More on Angular App Security
  // 316. Restricting Routing with Guards / ng g guard auth/Auth
          // CanActivate
          // CanActivateChild
          // CanDeactivate
          // CanLoad
  // 317. Issues With Guards
  // 318. A Solution to the Guard with RxJs
  // 319. Implementing Our RxJs Solution
  // 320. Navigation on Failing a Guard

  // ======== // Section 24: Build a Real Email Client!
  // 321. Generating Inbox Components
        // ng g c inbox/EmailCreate --skip-tests
        // ng g c inbox/EmailReply --skip-tests
        // ng g c inbox/EmailIndex --skip-tests
        // ng g c inbox/EmailShow --skip-tests
        // ng g s inbox/Email --skip-tests
  // 322. Retrieving Emails
  // 323. Adding Email Fetching to the Service
  // 324. Connecting the Service - not working
  // 325. Rendering a List of Emails
  // 326. Child Route Navigation (ng g c inbox/PlaceholderMail)
  // 327.+ 328.+ 329. Relative Links with Router Link + Styling the Selected Email + Placeholder Markup
  // 330. Extracting URL Params
  // 331. Accessing Route Information
  // ++ 332. Snapshot vs Observable Route Params
  // 333. Issues with Nested Subscribes
  // 334. Canceling Previous Email Requests
  // 335. Handling Undefined Data
  // 336.+ 337. Reusable Data Fetching with Resolvers + Using a Resolver
          // ng g s inbox/EmailResolver --skip-tests
  // 338. Communicating Data Out of a Resolver
  // 339. (EMPTY from rxjs) Error Handling with Resolvers (ng g c inbox/NotFound --skip-tests)
  // 340. Showing Email HTML (did not do it)
  // 341. + 342. Component Reuse in Email Creation + A Reusable Modal (ng g c shared/Modal)
  // 343. Some More Modal Implementation
  // 344. Where to Place the Modal?
  // 345. Toggling Modal Visibility (ng g c inbox/EmailForm)
  // 346.
  // 347.
  // 348.
  // 349.
}
