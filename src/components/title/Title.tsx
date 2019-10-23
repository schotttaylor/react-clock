import React, { FC, useState } from 'react';
import './title.css';

export const Title: FC = () => {
  const [siteTitle] = useState('React Clock');
  const [siteTitleRotations] = useState([-25,-19,-13.5,-8,-4,0,5,10.5,15,20,25.5]);

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
