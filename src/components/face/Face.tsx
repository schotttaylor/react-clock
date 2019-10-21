import React, { FC } from 'react';
import './Face.css';

const Face: FC = () => {
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
export default Face;

