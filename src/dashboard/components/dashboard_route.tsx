import * as React from 'react';
import CalendarDateControlWrapper from 'src/dashboard/components/calendar_date_control_wrapper';
import CalendarViewWrapper from 'src/dashboard/components/calendar_view_wrapper';

class DashboardRoute extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <CalendarDateControlWrapper />
        <CalendarViewWrapper />
      </div>
    )
  }
}

export default DashboardRoute;
