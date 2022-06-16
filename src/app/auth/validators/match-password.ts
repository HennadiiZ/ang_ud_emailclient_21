import { AbstractControl, FormControl, FormGroup, Validator } from "@angular/forms";

export class MatchPassword implements Validator {

  // validate(control: AbstractControl){}
  // validate(formControl: FormControl){}
  validate(formGroup: FormGroup){

    const { password, passwordConfirmation } = formGroup.value;

    if(password === passwordConfirmation){
      return null;
    }else {
      return { passwordDontMatch: true }; // authForm.errors === { passwordDontMatch: true };
    }
  }
}
