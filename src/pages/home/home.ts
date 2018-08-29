import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { State, AddingUsersSuccess, getAllUsers } from '../../store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users$: Observable<User[]>;
  counter: number;
  constructor(public navCtrl: NavController, private store: Store<State>) {
    this.counter = 0;
    this.users$ = store.select(getAllUsers);
  }

  addUser(couter) {
    couter += 1;
    const data: User = { id: 'id' + couter, name: 'name ' + couter };
    this.store.dispatch(new AddingUsersSuccess([data]));
    this.counter = couter;
  }

  onDeleteUser(id: string) {
    console.log(id);
  }
}
