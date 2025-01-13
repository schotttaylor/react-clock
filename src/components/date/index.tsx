import React, { useState, FC } from 'react';
import './date.css';

export const DateDisplay: FC = () => {

  const now = new Date();
  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const [dayVal, setDayVal] = useState<string>('');
  const [monthVal, setMonthVal] = useState<string>('');
  const [yearVal, setYearVal] = useState<string>('');

  setInterval(() => { 
    setDayVal(("0" + now.getDate()).slice(-2));
    setMonthVal(monthNames[now.getMonth()]);
    setYearVal(now.getFullYear().toString().substring(2, 4));
  }, 27)
  
  return (
    <div className="date">
      <div className="dateDisplay">
        <span className="month">{monthVal}</span>
        <span className="day">{dayVal}</span>
        <span className="year">{yearVal}</span>
      </div>
    </div>
  );
}

