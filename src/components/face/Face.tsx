import * as React from 'react';
import { Component, Fragment } from 'react';
import './Face.css';

export default class Face extends Component {
  render() {
    return (
      <Fragment>
          <div className="face">
            <div className="faceGradient"/>
            <div className="faceRingInner"/>
            <div className="faceRingInnerDouble"/>
            <div className="faceRingOuter"/>
            <div className="name">Schott</div>
          </div>
      </Fragment>
    );
  }
}

