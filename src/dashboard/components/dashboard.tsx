import * as React from 'react';
import CalendarDateControl from 'src/dashboard/components/calendar_date_control';
import CalendarViewWrapper from 'src/dashboard/components/calendar_view_wrapper';

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
