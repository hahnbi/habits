import * as actionConstants from 'src/store/action_constants/ui';
import { ActionsUnion, createAction } from 'src/store/action_helpers';

const actions = {
  updateYearMonth: (year: number, month: number) => createAction(actionConstants.UPDATE_YEAR_MONTH, {
    month,
    year
  }),

  updateDate: (date: number) => createAction(actionConstants.UPDATE_DATE, date),
}

type actions = ActionsUnion<typeof actions>

export default actions;
