import * as React from 'react';
import { Component, Fragment } from 'react';
import './Face.css';

class Face extends Component {
  render() {
    return (
      <Fragment>
          <div className="face">
            <div className="faceGradient"/>
            <div className="faceRingInner"/>
            <div className="faceRingInnerDouble"/>
            <div className="faceRingOuter"/>
            <div className="title">Schott</div>
          </div>
      </Fragment>
    );
  }
}

export default Face;
