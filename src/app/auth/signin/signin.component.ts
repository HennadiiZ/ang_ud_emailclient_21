import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  }
  );

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.authForm.invalid){
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.password);
        console.log(error.error.username);
        if (!error.status) {
          this.authForm.setErrors({ noConnection: true })
        }
      },
      complete: () => {}
    })
  }
}
