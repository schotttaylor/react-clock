import * as React from 'react';
import { Component, Fragment } from 'react';
import './Date.css';

export default class DateDisplay extends Component {

  monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  time     = new Date();
  monthVal = this.monthNames[this.time.getMonth()];
  dayVal   = ("0" + this.time.getDate()).slice(-2);
  yearVal  = this.time.getFullYear().toString().substr(2, 2);

  render() {
    return (
      <Fragment>
        <div className="date">
          <div className="dateDisplay">
            <span className="month">{this.monthVal}</span>
            <span className="day">{this.dayVal}</span>
            <span className="year">{this.yearVal}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

