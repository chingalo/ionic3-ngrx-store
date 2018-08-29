import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models/user';
import { userActions, userActionTypes } from '../actions';

export interface userState extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: userState = userAdapter.getInitialState({
  loading: false,
  loaded: false
});

export function userReducer(
  state = initialState,
  action: userActions
): userState {
  switch (action.type) {
    case userActionTypes.LoadUser: {
      return { ...state, loading: true };
    }
    case userActionTypes.AddingUsersSuccess: {
      return userAdapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    default: {
      return state;
    }
  }
}
