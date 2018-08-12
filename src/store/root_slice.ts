import { combineReducers } from 'redux';
import * as ui from 'src/store/slices/ui';
import * as user from 'src/store/slices/user';

const sliceMap = {
  ui,
  user,
};

type SliceKey = keyof typeof sliceMap;

export interface IGlobalState {
  ui: ui.IState,
  user: user.IState,
}

export function getInitialState(): IGlobalState {
  return Object.keys(sliceMap).reduce((state, sliceKey) => {
    state[sliceKey] = sliceMap[sliceKey].getInitialState();
    return state;
  }, {} as IGlobalState);
}

const reducerMap = {
  ui: ui.reducer,
  user: user.reducer,
};
export const reducer = combineReducers(reducerMap);

type BoundSelectorFunctionType = (globalState: IGlobalState, ...args: any[]) => any;
type BoundSelectorMap<T> = {
  [P in keyof T]: BoundSelectorFunctionType;
}

function bindSelectorsToLocalState<T, P extends SliceKey>(sliceSelectors: T, sliceKey: P): BoundSelectorMap<T> {
  return Object.keys(sliceSelectors).reduce((boundSelectors, selectorKey) => {
    boundSelectors[selectorKey] = (globalState: IGlobalState, ...args: any[]) => {
      return sliceSelectors[selectorKey](globalState[sliceKey])
    };
    return boundSelectors;
  }, {} as BoundSelectorMap<T>)
}

export const selectors = {
  ui: bindSelectorsToLocalState(ui.selectors, 'ui'),
  user: bindSelectorsToLocalState(user.selectors, 'user'),
}

