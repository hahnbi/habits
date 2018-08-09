import { LocalDate } from 'js-joda';
import uiActions from 'src/store/actions/ui';

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

export function reducer(state: IState = getInitialState(), action: uiActions): IState {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
