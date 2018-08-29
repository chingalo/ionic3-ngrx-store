import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { userReducer, userState } from './user.reducer';

export interface State {
  users: userState;
}

export const reducers: ActionReducerMap<State> = {
  users: userReducer
};
export const getRootState = (state: State) => state;
export const metaReducers: MetaReducer<State>[] = [];
