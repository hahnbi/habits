import * as actionConstants from 'src/store/action_constants/user';
import Actions from 'src/store/actions/user';
import { IUser } from 'src/types/user';

export interface IState {
  user: IUser | null;
}

export function getInitialState(): IState {
  return {
    user: null
  };
}

export function reducer(state: IState = getInitialState(), action: Actions): IState {
  switch (action.type) {
    case actionConstants.SET_USER: {
      const { payload: user } = action;

      return {
        ...state,
        user,
      };
    }
    case actionConstants.CLEAR_USER: {
      return {
        ...state,
        user: null
      };
    }
    default:
      return state;
  }
}

export const selectors = {
  isLoggedIn(localState: IState) {
    return !!localState.user
  },
}
