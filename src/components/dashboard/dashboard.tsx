import * as React from 'react';
import CalendarView from 'src/components/dashboard/calendar_view';

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <div>Dashboard</div>
        <CalendarView />
      </div>
    )
  }
}

export default Dashboard;
