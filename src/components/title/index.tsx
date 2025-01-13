import React, { FC, useState } from 'react';
import './title.css';

export const Title: FC = () => {
  const [siteTitle] = useState('React Analog');
  const [siteTitleRotations] = useState([-20,-15.7,-11.7,-7.8,-5,0,4,8.7,13.2,16.5,19.7,23.7]);

  const rotation = (index: number) => {
    return `rotate(${ siteTitleRotations[index] }deg)`;
  }

  return (
    <div className="title">
      {siteTitle.split('').map(
        (char, index) => (
          <div key={index} className={`char char-${index}`}
            style={{ transform: rotation(index) }}>{char}</div>
        )
      )}
    </div>
  );
}
