import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
  model: any = {}

  constructor(public af: AngularFire) {
  }

  login() {
    this.af.auth.login({
      email: this.model.username,
      password: this.model.password
    });
  }

  register() {
    this.af.auth.createUser({
      email: this.model.username,
      password: this.model.password
    });
  }

  googleLogin() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }
}