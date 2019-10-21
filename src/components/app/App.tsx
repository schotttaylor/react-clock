import React, { FC } from 'react';
import DateDisplay from '../date/Date';
import Face from '../face/Face';
import Hands from '../hands/Hands';
import Numbers from '../numbers/Numbers';
import Ticks from '../ticks/Ticks';
import Title from '../title/Title';
import './App.css';

export const App: FC = () => {
  return (
    <div className="App">
      <Title/>
      <div className="clock">
        <Face />
        <DateDisplay />
        <Numbers />
        <Ticks />
        <Hands />
      </div>
    </div>
  );
}

