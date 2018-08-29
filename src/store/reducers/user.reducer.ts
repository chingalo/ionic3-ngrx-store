import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user';
import { userActions, userActionTypes } from '../actions';

export interface userState extends EntityState<User> {}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: userState = userAdapter.getInitialState({});

export function userReducer(
  state = initialState,
  action: userActions
): userState {
  switch (action.type) {
    case userActionTypes.AddingUsers: {
      return userAdapter.addMany(action.payload.users, state);
    }
    case userActionTypes.DeletingAllUsers: {
      return userAdapter.removeAll(state);
    }
    case userActionTypes.DeletingUser: {
      return userAdapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}
