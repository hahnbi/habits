import * as React from 'react';
import CalendarDateControl from 'src/components/dashboard/calendar_date_control';
import CalendarView from 'src/components/dashboard/calendar_view';

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <CalendarDateControl />
        <CalendarView />
      </div>
    )
  }
}

export default Dashboard;
