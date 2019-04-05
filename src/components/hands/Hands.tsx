import * as React from 'react';
import { Component, Fragment } from 'react';
import './Hands.css';

class Hands extends Component {

  state = {
    hourHandPosition: '',
    minuteHandPosition: '',
    secondHandPosition: '',
    time: new Date
  };

  hourHandAngle   = ((this.state.time.getHours() % 12) + this.state.time.getMinutes() / 60) * 30;
  minuteHandAngle = (this.state.time.getMinutes() + this.state.time.getSeconds() / 60) * 6;
  secondHandAngle = (this.state.time.getSeconds() + this.state.time.getMilliseconds() / 1000) * 6;

  clock: any = setInterval(this.clock, 1000);
  
  constructor(props: {}) {
    super(props);
    this.state = {
      hourHandPosition: `translate(0, -5vw) translateZ(1px) rotate(${this.hourHandAngle}deg`,
      minuteHandPosition: `translate(0, -7vw) translateZ(1px) rotate(${this.minuteHandAngle}deg`,
      secondHandPosition: `translate(0, -8.5vw) translateZ(1px) rotate(${this.secondHandAngle}deg`,
      time: new Date()
    };
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    // this.timer();
    setInterval(this.timer, 1000);
  }
  
  timer() {
    const time = new Date();
    const hourHandAngle   = ((time.getHours() % 12) + time.getMinutes() / 60) * 30;
    const minuteHandAngle = (time.getMinutes() + time.getSeconds() / 60) * 6;
    const secondHandAngle = (time.getSeconds() + time.getMilliseconds() / 1000) * 6;

    this.setState({ 
      hourHandPosition: `translate(0, -5vw) translateZ(1px) rotate(${hourHandAngle}deg`,
      minuteHandPosition: `translate(0, -7vw) translateZ(1px) rotate(${minuteHandAngle}deg`,
      secondHandPosition: `translate(0, -8.5vw) translateZ(1px) rotate(${secondHandAngle}deg`,
      time: new Date()
    })
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

export default Hands;
