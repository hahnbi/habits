import * as actionConstants from 'src/store/action_constants/ui';
import { ActionsUnion, createAction } from 'src/store/action_helpers';

const actions = {
  updateMonth: (month: number) => createAction(actionConstants.UPDATE_MONTH, month),
  updateYear: (year: number) => createAction(actionConstants.UPDATE_YEAR, year),
}

type actions = ActionsUnion<typeof actions>

export default actions;
