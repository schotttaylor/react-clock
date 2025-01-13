import React, { FC } from 'react';
import './face.css';

export const Face: FC = () => {
  return (
    <div className="face">
      <div className="faceGradient"/>
      <div className="faceRingInner"/>
      <div className="faceRingInnerDouble"/>
      <div className="faceRingOuter"/>
      <div className="name">Schott</div>
    </div>
  );
}

