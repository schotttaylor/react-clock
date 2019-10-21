import React, { FC, useState } from 'react';
import './Ticks.css';

const Ticks: FC = () => {

  const [tickCount] = useState(72 * 5);
  const [ticks] = useState<number[]>([]);

  const rotateTick = (index: number) => {
    return `rotate(${index}deg)`;
  }

  const renderTicks = () => {
    for (let i: number = 0; i < tickCount; i += 6) {
      ticks.push(i);
    }
  }

  renderTicks();

  return (
    <div className="ticks">
      { ticks.map(
        (tick, index) => (
        <div key={index} 
            className={`tick pos-${tick}`} 
            style={{transform: rotateTick(tick)}}>
          <div/>
        </div>
        )
      )}
    </div>
  );
}

export default Ticks;