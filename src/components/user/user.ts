import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

/**
 * Generated class for the UserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {
  @Input()
  user: User;

  @Output()
  deleteUser = new EventEmitter();

  constructor() {}

  delete() {
    this.deleteUser.emit();
  }
}
