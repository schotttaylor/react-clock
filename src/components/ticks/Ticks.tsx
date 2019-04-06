import * as React from 'react';
import { Component, Fragment } from 'react';
import './Ticks.css';

export default class Ticks extends Component {

  tickCount: number;
  ticks: number[];

  constructor(props: {}) {
    super(props);
    this.tickCount = 72 * 5;
    this.ticks = [];
  }

  rotateTick(index: number) {
    return `rotate(${index}deg`;
  }

  renderTicks() {
    for (let i: number = 0; i < this.tickCount; i += 6) {
      this.ticks.push(i);
    }
  }

  render() {
    this.renderTicks();

    return (
      <Fragment>
        <div className="ticks">
          { this.ticks.map(
            (tick, index) => (
            <div key={index} 
                className={`tick pos-${tick}`} 
                style={{transform: this.rotateTick(tick)}}>
              <div/>
            </div>
            )
          )}
        </div>
      </Fragment>
    );
  }
}
