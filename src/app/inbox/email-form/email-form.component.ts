import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from 'src/app/interfaces';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  @Input() email!: Email;
  @Output() emailSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      // from: new FormControl(from),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    console.log(this.emailForm.value);
    console.log(this.emailForm.getRawValue());

    this.emailSubmit.emit(this.emailForm.value);
  }

}
