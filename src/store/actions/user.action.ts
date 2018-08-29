import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum userActionTypes {
  LoadUser = '[User] Loading user',
  AddingUsersSuccess = '[User] Adding users successs'
}

export class LoadUser implements Action {
  readonly type = userActionTypes.LoadUser;
}

export class AddingUsersSuccess implements Action {
  readonly type = userActionTypes.AddingUsersSuccess;
  constructor(public payload: User[]) {}
}

export type userActions = LoadUser | AddingUsersSuccess;
