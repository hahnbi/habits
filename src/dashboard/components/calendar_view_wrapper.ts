import { connect } from 'react-redux';
import CalendarView from 'src/dashboard/components/calendar_view';
import { IGlobalState, selectors } from 'src/store/root_slice';

function mapStateToProps(state: IGlobalState) {
  return {
    date: selectors.ui.getDate(state),
    month: selectors.ui.getMonth(state),
    year: selectors.ui.getYear(state),
  };
}

export default connect(mapStateToProps)(CalendarView);
