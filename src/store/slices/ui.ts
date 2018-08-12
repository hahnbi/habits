import { LocalDate } from 'js-joda';
import * as actionConstants from 'src/store/action_constants/ui';
import Actions from 'src/store/actions/ui';

export interface IState {
  date: number;
  month: number;
  year: number;
}

export function getInitialState(): IState {
  const now = LocalDate.now();

  return {
    date: now.dayOfMonth(),
    month: now.monthValue(),
    year: now.year(),
  }
}

export function reducer(state: IState = getInitialState(), action: Actions): IState {
  switch (action.type) {
    case actionConstants.UPDATE_YEAR_MONTH: {
      const { payload } = action;
      return {
        ...state,
        month: payload.month,
        year: payload.year,
      };
    }
    case actionConstants.UPDATE_DATE: {
      const { payload: date } = action;
      return {
        ...state,
        date,
      };
    }
    default:
      return state;
  }
}

export const selectors = {
  getDate: (localState: IState) => localState.date,
  getMonth: (localState: IState) => localState.month,
  getYear: (localState: IState) => localState.year,
};
