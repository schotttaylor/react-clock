import * as React from 'react';
import { Component } from 'react';
import './Date.css';

export default class DateDisplay extends Component {

  state = {
    dayVal: '',
    monthVal: '',
    yearVal: ''
  };

  monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  constructor(props: {}) {
    super(props);
    this.getDate = this.getDate.bind(this);
  }

  componentDidMount() {
    this.getDate()
  }

  getDate() {
    const now = new Date();
    
    this.setState({ 
      dayVal   : ("0" + now.getDate()).slice(-2),
      monthVal : this.monthNames[now.getMonth()],
      yearVal  : now.getFullYear().toString().substr(2, 2),
    })
    
    requestAnimationFrame(this.getDate)
  }

  render() {
    return (
      <div className="date">
        <div className="dateDisplay">
          <span className="month">{this.state.monthVal}</span>
          <span className="day">{this.state.dayVal}</span>
          <span className="year">{this.state.yearVal}</span>
        </div>
      </div>
    );
  }
}

