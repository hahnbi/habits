import { combineReducers } from 'redux';
import * as ui from 'src/store/slices/ui';

const sliceMap = {
  ui,
};

export interface IInitialState {
  ui: ui.IState,
}

export function getInitialState(): IInitialState {
  return Object.keys(sliceMap).reduce((state, sliceKey) => {
    state[sliceKey] = sliceMap[sliceKey].getInitialState();
    return state;
  }, {} as IInitialState);
}

const reducerMap = Object.keys(sliceMap).reduce((reducers, sliceKey) => {
  reducers[sliceKey] = sliceMap[sliceKey].reducer;
  return reducers;
}, {});
export const reducer = combineReducers(reducerMap);
