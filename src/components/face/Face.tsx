import * as React from 'react';
import { Component, Fragment } from 'react';
import './Face.css';

class Face extends Component {
  render() {
    return (
      <Fragment>
        <div className="clockFace"/>
        <div className="faceGradient"/>
        <div className="faceRingInner"/>
        <div className="faceRingInnerDouble"/>
        <div className="faceRingOuter"/>
        <div className="title">Schott</div>
      </Fragment>
    );
  }
}

export default Face;
