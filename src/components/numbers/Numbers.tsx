import * as React from 'react';
import { Component, Fragment } from 'react';
import './Numbers.css';


export default class Numbers extends Component {
  numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  rotateNumber(numb: number) {
    return `rotate(${numb * 30}deg`;
  }

  positionNumber(numb: number) {
    return `translate(0, -16vmin) rotate(${numb * 30}deg`;
  }

  render() {
    return (
      <Fragment>
        <div className="numbers">
          { this.numbers.map(
            (numb) => (
            <div key={numb} 
                className={`number number-${numb}`} 
                style={{transform: this.rotateNumber(numb)}}>
              <div style={{transform: this.positionNumber(-numb)}}>{numb}</div>
            </div>
            )
          )}
        </div>
      </Fragment>
    );
  }
}
