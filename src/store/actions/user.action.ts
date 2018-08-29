import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum userActionTypes {
  AddingUsers = '[User] Adding users ',
  DeletingAllUsers = '[User] Deleting all users',
  DeletingUser = '[User] Deleting user by id'
}

export class DeletingAllUsers implements Action {
  readonly type = userActionTypes.DeletingAllUsers;
}

export class DeletingUser implements Action {
  readonly type = userActionTypes.DeletingUser;
  constructor(public payload: { id: string }) {}
}

export class AddingUsers implements Action {
  readonly type = userActionTypes.AddingUsers;
  constructor(public payload: { users: User[] }) {}
}

export type userActions = DeletingAllUsers | DeletingUser | AddingUsers;
