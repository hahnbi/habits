import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import CalendarDateControl from 'src/dashboard/components/calendar_date_control';
import uiActions from 'src/store/actions/ui';
import * as rootSlice from 'src/store/root_slice';

function mapStateToProps(state: rootSlice.IState) {
  return {
    date: state.ui.date,
    month: state.ui.month,
    year: state.ui.year,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const boundUiActions = bindActionCreators(uiActions, dispatch);
  return {
    updateDate: boundUiActions.updateDate,
    updateYearMonth: boundUiActions.updateYearMonth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDateControl);
