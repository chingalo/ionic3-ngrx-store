import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum userActionTypes {
  LoadUser = '[User] Loading user',
  LoadUserSuccess = '[User] Loading user successs'
}

export class LoadUser implements Action {
  readonly type = userActionTypes.LoadUser;
}

export class LoadUserSuccess implements Action {
  readonly type = userActionTypes.LoadUserSuccess;
  constructor(public payload: User) {}
}

export type userActions = LoadUser | LoadUserSuccess;
