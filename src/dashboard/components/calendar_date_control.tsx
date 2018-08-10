import { Month, Year } from 'js-joda';
import React from 'react';
import uiActions from 'src/store/actions/ui';

const START_YEAR = 2000;

interface IPropsFromState {
  month: number;
  year: number;
}

interface IPropsFromDispatch {
  updateYearMonth(year: number, month: number): typeof uiActions.updateYearMonth
}

type Props = IPropsFromState & IPropsFromDispatch

function upcaseFirstChar(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function range(start: number, end: number): number[] {
  if (end < start) {
    throw new Error('range(): end must be greater than start');
  }

  const output = [];

  while (start <= end) {
    output.push(start);
    start += 1;
  }

  return output;
}

class CalendarDateControl extends React.Component<Props> {
  public handleMonthChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    const month = parseInt(value, 10);
    this.props.updateYearMonth(this.props.year, month);
  }

  public handleYearChange = (event: React.FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    const year = parseInt(value, 10);
    this.props.updateYearMonth(year, this.props.month);
  }

  public getMonths() {
    return Month.values().map(month => {
      return {
        display: upcaseFirstChar(month.toString()),
        value: month.value(),
      }
    });
  }

  public getYears() {
    // @ts-ignore
    return range(START_YEAR, Year.now().value());
  }

  public render() {
    return (
      <div className="form-row">
        <div className="form-group col-md-4">
          {this.renderMonths()}
        </div>
        <div className="form-group col-md-1">
          {this.renderYears()}
        </div>
      </div>
    )
  }

  public renderMonths = () => {
    return (
      <select
        className="form-control"
        value={this.props.month}
        onChange={this.handleMonthChange}
      >
        {this.renderMonthOptions()}
      </select>
    );
  }

  public renderMonthOptions = () => {
    return this.getMonths().map(({ value, display }) => {
      return (
        <option key={value} value={value}>{display}</option>
      );
    });
  }

  public renderYears = () => {
    return (
      <select
        className="form-control"
        value={this.props.year}
        onChange={this.handleYearChange}
      >
        {this.renderYearOptions()}
      </select>
    );
  }

  public renderYearOptions = () => {
    return this.getYears().map(year => {
      return (
        <option key={year} value={year}>{year}</option>
      );
    });
  }
}

export default CalendarDateControl;
