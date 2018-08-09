import * as React from 'react';
import CalendarDateControl from 'src/components/dashboard/calendar_date_control';
import CalendarViewWrapper from 'src/components/dashboard/calendar_view_wrapper';

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <CalendarDateControl />
        <CalendarViewWrapper />
      </div>
    )
  }
}

export default Dashboard;
