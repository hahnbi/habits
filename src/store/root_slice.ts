import { combineReducers } from 'redux';
import * as ui from 'src/store/slices/ui';
import * as user from 'src/store/slices/user';
import { IMapObject } from 'src/types/common';

const sliceMap = {
  ui,
  user,
};

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

const reducerMap = Object.keys(sliceMap).reduce((reducers, sliceKey) => {
  reducers[sliceKey] = sliceMap[sliceKey].reducer;
  return reducers;
}, {});

export const reducer = combineReducers(reducerMap);

type SelectorFunction = (globalState: IGlobalState, ...args: any[]) => any;
type SelectorMap = IMapObject<SelectorFunction>
type BoundSelectorMap = IMapObject<SelectorMap>

export const selectors: BoundSelectorMap = Object.keys(sliceMap).reduce((boundSlices, sliceKey) => {
  const sliceSelectors = sliceMap[sliceKey].selectors || {};

  const boundSlice = Object.keys(sliceSelectors).reduce((boundSelectors, selectorKey) => {
    boundSelectors[selectorKey] = (globalState: IGlobalState, ...args: any[]) => {
      return sliceSelectors[selectorKey](globalState[sliceKey], ...args)
    }
    return boundSelectors;
  }, {});

  boundSlices[sliceKey] = boundSlice;
  return boundSlices;
}, {});
