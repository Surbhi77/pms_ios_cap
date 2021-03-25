import { AbstractControl } from '@angular/forms';
export class ConfirmPasswordValidator {
  static MatchPassword(control: AbstractControl) {
    let password = control.get('new_pass').value;
    let confirmPassword = control.get('cnew_pass').value;
    if (password != confirmPassword) {
      control.get('cnew_pass').setErrors({ ConfirmPassword: true });
    }
    else {
      return null;
    }
  }
}