import * as React from 'react';
import { Component } from 'react';
import DateDisplay from '../date/Date';
import Face from '../face/Face';
import Hands from '../hands/Hands';
import Numbers from '../numbers/Numbers'; 
import Ticks from '../ticks/Ticks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="clock">
            <Face/>
            <DateDisplay/>
            <Numbers/>
            <Ticks/>
            <Hands/>
          </div>
      </div>
    );
  }
}

export default App;
