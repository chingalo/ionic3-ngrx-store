import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Store } from '@ngrx/store';
import {
  State,
  AddingUsers,
  getAllUsers,
  DeletingUser,
  DeletingAllUsers
} from '../../store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  users$: Observable<User[]>;
  counter: number;
  constructor(public navCtrl: NavController, private store: Store<State>) {
    this.counter = 0;
    this.users$ = store.select(getAllUsers);
  }

  addUser(couter) {
    couter += 1;
    const users: User = { id: 'id' + couter, name: 'name ' + couter };
    this.store.dispatch(new AddingUsers({ users: [users] }));
    this.counter = couter;
  }

  onDeleteUser(id: string) {
    this.store.dispatch(new DeletingUser({ id }));
  }

  deleteAll() {
    this.store.dispatch(new DeletingAllUsers());
  }
}
