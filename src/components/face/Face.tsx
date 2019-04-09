import * as React from 'react';
import { Component } from 'react';
import './Face.css';

export default class Face extends Component {
  render() {
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
}

