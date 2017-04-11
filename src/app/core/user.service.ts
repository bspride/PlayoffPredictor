import {Injectable} from '@angular/core';
import {AngularFireAuth, FirebaseAuthState} from 'angularfire2';

@Injectable()
export class UserService {
  constructor(public auth: AngularFireAuth) {
  }
}