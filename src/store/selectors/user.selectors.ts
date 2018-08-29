import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { userAdapter } from '../reducers/user.reducer';

export const getUsersEntityState = createSelector(
  getRootState,
  (state: State) => state.users
);

export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers
} = userAdapter.getSelectors(getUsersEntityState);
