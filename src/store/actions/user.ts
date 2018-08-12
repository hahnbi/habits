import * as actionConstants from 'src/store/action_constants/user';
import { ActionsUnion, createAction } from 'src/store/action_helpers';
import { IUser } from 'src/types/user';

const actions = {
  setUser: (user: IUser) => createAction(actionConstants.SET_USER, user),

  clearUser: () => createAction(actionConstants.CLEAR_USER),
}

type actions = ActionsUnion<typeof actions>

export default actions;
