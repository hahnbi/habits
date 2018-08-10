import { Month, Year, YearMonth } from 'js-joda';
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

  public handleIncrementMonthYear = () => {
    const yearMonth = YearMonth.of(this.props.year, this.props.month);
    const nextYearMonth = yearMonth.plusMonths(1);
    this.props.updateYearMonth(nextYearMonth.year(), nextYearMonth.month().value());
  }

  public handleDecrementMonthYear = () => {
    const yearMonth = YearMonth.of(this.props.year, this.props.month);
    const nextYearMonth = yearMonth.minusMonths(1);
    this.props.updateYearMonth(nextYearMonth.year(), nextYearMonth.month().value());
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
      <div className="form-row align-items-center">
        <div className="form-group">
          {this.renderDecrementMonthYearControl()}
        </div>
        <div className="form-group col-md-4">
          {this.renderMonths()}
        </div>
        <div className="form-group col-md-1">
          {this.renderYears()}
        </div>
        <div className="form-group">
          {this.renderIncrementMonthYearControl()}
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

  public renderDecrementMonthYearControl = () => {
    return (
      <button className="btn btn-link"
        onClick={this.handleDecrementMonthYear}
      >
        <i className="fas fa-caret-left icon-h3" />
      </button>
    )
  }

  public renderIncrementMonthYearControl = () => {
    const nowYearMonth = YearMonth.now();
    const isDisabled = nowYearMonth.equals(YearMonth.of(this.props.year, this.props.month));

    return (
      <button className="btn btn-link"
        onClick={this.handleIncrementMonthYear}
        disabled={isDisabled}
      >
        <i className="fas fa-caret-right icon-h3" />
      </button>
    )
  }
}

export default CalendarDateControl;
