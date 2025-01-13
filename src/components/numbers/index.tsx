import React, { FC, useState } from 'react';
import './numbers.css';

export const Numbers: FC = () => {

  const [numbers] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  
  const rotateNumber = (n: number) => {
    return `rotate(${n * 30}deg`;
  };

  const positionNumber = (n: number) => {
    return `translate(0, -21.5vmin) rotate(${n * 30}deg)`;
  };

  return (
    <div className="numbers">
      { numbers.map((n) => (
        <div key={n} 
            className={`number number-${n}`} 
            style={{transform: rotateNumber(n)}}>
          <div style={{transform: positionNumber(-n)}}>{n}</div>
        </div>
        )
      )}
    </div>
  );
}
