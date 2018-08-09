import { YearMonth } from 'js-joda';
import * as React from 'react';
import Namespace from 'src/utilities/namespacer';

interface IProps {
  date: number;
  month: number;
  year: number;
}

const namespace = new Namespace('calendar-view-component');

class CalendarView extends React.Component<IProps> {
  public getDaysInYearMonth() {
    const yearMonth = YearMonth.of(this.props.year, this.props.month);
    return yearMonth.lengthOfMonth();
  }

  public render() {
    return (
      <div className={namespace.name('container')}>
        {this.renderRows()}
      </div>
    );
  }

  public renderRows = () => {
    const daysInYearMonth = this.getDaysInYearMonth();

    return Array.from(Array(daysInYearMonth)).map((_, idx) => {
      return (
        <div key={idx} className={namespace.name('date')}>{idx + 1}</div>
      );
    })
  }
}

export default CalendarView;
