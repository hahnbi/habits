import { combineReducers } from 'redux';
import * as ui from 'src/store/slices/ui';
import * as user from 'src/store/slices/user';

const sliceMap = {
  ui,
  user,
};

export interface IState {
  ui: ui.IState,
  user: user.IState,
}

export function getInitialState(): IState {
  return Object.keys(sliceMap).reduce((state, sliceKey) => {
    state[sliceKey] = sliceMap[sliceKey].getInitialState();
    return state;
  }, {} as IState);
}

const reducerMap = Object.keys(sliceMap).reduce((reducers, sliceKey) => {
  reducers[sliceKey] = sliceMap[sliceKey].reducer;
  return reducers;
}, {});

export const reducer = combineReducers(reducerMap);
