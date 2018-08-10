import { User } from 'firebase';
import * as actionConstants from 'src/store/action_constants/user';
import { ActionsUnion, createAction } from 'src/store/action_helpers';

const actions = {
  setUser: (firebaseUser: User) => createAction(actionConstants.SET_USER, firebaseUser),

  clearUser: () => createAction(actionConstants.CLEAR_USER),
}

type actions = ActionsUnion<typeof actions>

export default actions;
