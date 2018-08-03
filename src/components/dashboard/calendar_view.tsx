import * as React from 'react';

class CalendarView extends React.Component {
  public render() {
    return (
      <div>
        {this.renderRows()}
      </div>
    );
  }

  public renderRows = () => {
    return [1, 2, 3].map(day => {
      return (
        <div key={day} className="badge badge-primary">{day}</div>
      );
    })
  }
}

export default CalendarView;
