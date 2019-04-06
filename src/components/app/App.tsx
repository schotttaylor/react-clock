import * as React from 'react';
import { Component } from 'react';
import DateDisplay from '../date/Date';
import Face from '../face/Face';
import Hands from '../hands/Hands';
import Numbers from '../numbers/Numbers';
import Ticks from '../ticks/Ticks';
import './App.css';

export default class App extends Component {

  siteTitle = ['R', 'e', 'a', 'c', 't', ' ', 'C', 'l', 'o', 'c', 'k'];

  rotation(index: number) {
    const charPosition = index - 5;
    const charRotation = charPosition * 7;
    return `rotate(${charRotation}deg)`;
  }

  render() {
    return (
      <div className="App">
        {/* <div className="site-title">
          {this.siteTitle.map(
            (char, index) => (
              <div key={index} className={`char char-${index}`}
                style={{ transform: this.rotation(index) }}>{char}</div>
            )
          )}
        </div> */}
        <div className="site-title">
          <div className="char char-0" style={{transform: `rotate(-25deg)`}}>R</div>
          <div className="char char-1" style={{transform: `rotate(-19deg)`}}>e</div>
          <div className="char char-2" style={{transform: `rotate(-13.5deg)`}}>a</div>
          <div className="char char-3" style={{transform: `rotate(-8deg)`}}>c</div>
          <div className="char char-4" style={{transform: `rotate(-4deg)`}}>t</div>
          <div className="char char-5" style={{transform: `rotate(0deg)`}}>&nbsp;</div>
          <div className="char char-6" style={{transform: `rotate(6deg)`}}>C</div>
          <div className="char char-7" style={{transform: `rotate(11.5deg)`}}>l</div>
          <div className="char char-8" style={{transform: `rotate(16deg)`}}>o</div>
          <div className="char char-9" style={{transform: `rotate(21deg)`}}>c</div>
          <div className="char char-10" style={{transform: `rotate(26.5deg)`}}>k</div>
        </div>
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
}

