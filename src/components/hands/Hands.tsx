import * as React from 'react';
import { Component, Fragment } from 'react';
import './Hands.css';

export default class Hands extends Component {

  state = {
    hourHandPosition: '',
    minuteHandPosition: '',
    secondHandPosition: ''
  };
  
  constructor(props: {}) {
    super(props);
    this.runClock = this.runClock.bind(this);
  }

  componentDidMount() {
    this.runClock()
  }

  runClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const min  = now.getMinutes();
    const sec  = now.getSeconds();
    const ms   = now.getMilliseconds();
  
    const hourRotation = 30 * hour + (0.5 * min);
    const minRotation = 6 * min + (0.1 * sec);
    const secRotation = 6 * sec + 0.006 * ms;
    
    this.setState({ 
      hourHandPosition: `translate(0, -10.5vmin) translateZ(1px) rotate(${ hourRotation }deg`,
      minuteHandPosition: `translate(0, -14.75vmin) translateZ(2px) rotate(${ minRotation }deg`,
      secondHandPosition: `translate(0, -16.75vmin) translateZ(3px) rotate(${ secRotation }deg`,
      time: new Date()
    })
    
    requestAnimationFrame(this.runClock)
  }

  render() {
    return (
      <Fragment>
        <div className="hands">
          <div className="hand hour" style={{transform: this.state.hourHandPosition}}/>
          <div className="hand minute" style={{transform: this.state.minuteHandPosition}}/>
          <div className="hand second" style={{transform: this.state.secondHandPosition}}>
            <div className="tail"/>
          </div>
          <div className="minuteHub"/>
          <div className="secondHub"/>
        </div>
      </Fragment>
    );
  }
}
