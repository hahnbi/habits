import { connect } from 'react-redux';
import CalendarView from 'src/dashboard/components/calendar_view';
import { IGlobalState } from 'src/store/root_slice';

function mapStateToProps(state: IGlobalState) {
  return {
    date: state.ui.date,
    month: state.ui.month,
    year: state.ui.year,

  };
}

export default connect(mapStateToProps)(CalendarView);
