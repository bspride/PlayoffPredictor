import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login({
      email: 'email',
      password: 'pass'
    });
  }

  googleLogin() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }
}