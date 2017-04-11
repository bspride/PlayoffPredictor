import { Component } from '@angular/core';
import { UserService } from './user.service';
import {FirebaseAuthState} from 'angularfire2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  authState: FirebaseAuthState

  constructor(private userService: UserService) {
    this.authState = userService.auth.getAuth();
    this.subscribe();
  }

  subscribe() {
    this.userService.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    })
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }
}