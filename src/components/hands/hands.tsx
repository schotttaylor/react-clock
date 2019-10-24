
import React, { useState, FC } from 'react';
import './hands.css';

export const Hands: FC = () => {

  const [hourHandPosition, setHourHandPosition] = useState();
  const [minuteHandPosition, setMinuteHandPosition] = useState();
  const [secondHandPosition, setSecondHandPosition] = useState();

  const now = new Date();

  const hour = now.getHours() % 12;
  const min  = now.getMinutes();
  const sec  = now.getSeconds();
  const ms   = now.getMilliseconds();

  const hourRotation = 30 * hour + (0.5 * min);
  const minRotation = 6 * min + (0.1 * sec);
  const secRotation = 6 * sec + 0.006 * ms;
  

  const runClock = () => {
    setHourHandPosition(`translate(0, -9vmin) translateZ(1px) rotate(${ hourRotation }deg)`);
    setMinuteHandPosition(`translate(0, -12.5vmin) translateZ(2px) rotate(${ minRotation }deg)`);
    setSecondHandPosition(`translate(0, -14.25vmin) translateZ(3px) rotate(${ secRotation }deg)`);
    // setTime: new Date()
  };

  setTimeout(() => {
    runClock()
  },0);

  return (
    <div className="hands">
      <div className="hand hour" style={{transform: hourHandPosition}}/>
      <div className="hand minute" style={{transform: minuteHandPosition}}/>
      <div className="hand second" style={{transform: secondHandPosition}}>
        <div className="tail"/>
      </div>
      <div className="minuteHub"/>
      <div className="secondHub"/>
    </div>
  ); 
}