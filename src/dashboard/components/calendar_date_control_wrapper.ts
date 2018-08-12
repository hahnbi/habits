import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import CalendarDateControl from 'src/dashboard/components/calendar_date_control';
import uiActions from 'src/store/actions/ui';
import { IGlobalState, selectors } from 'src/store/root_slice';

function mapStateToProps(state: IGlobalState) {
  return {
    month: selectors.ui.getMonth(state),
    year: selectors.ui.getYear(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const boundUiActions = bindActionCreators(uiActions, dispatch);

  return {
    updateYearMonth: boundUiActions.updateYearMonth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDateControl);
