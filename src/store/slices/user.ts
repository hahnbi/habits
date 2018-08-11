import { IMapObject } from 'src/interfaces/common';
import { IUser } from 'src/interfaces/user';
import * as actionConstants from 'src/store/action_constants/user';
import Actions from 'src/store/actions/user';

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

      let createdAt: number;

      if (typeof user.metadata.creationTime === 'string') {
        createdAt = Date.parse(user.metadata.creationTime);
      } else {
        createdAt = 0;
      }

      const newUser = {
        createdAt,
        displayName: user.displayName || '',
        email: user.email || '',
        emailVerified: user.emailVerified,
        uid: user.uid,
      };

      return {
        ...state,
        user: newUser,
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

type Selector = (localState: IState) => any;

export const selectors: IMapObject<Selector> = {
  isLoggedIn(localState): boolean {
    return !!localState.user
  },
}
