import * as React from 'react';
import { Component, Fragment } from 'react';
import './Title.css';

export default class Title extends Component {
  siteTitle = 'React Clock';
  siteTitleRotations = [-25,-19,-13.5,-8,-4,0,5,10.5,15,20,25.5];

  rotation(index: number) {
    return `rotate(${ this.siteTitleRotations[index] }deg)`;
  }

  render() {
    return (
      <Fragment>
        <div className="title">
          {this.siteTitle.split('').map(
            (char, index) => (
              <div key={index} className={`char char-${index}`}
                style={{ transform: this.rotation(index) }}>{char}</div>
            )
          )}
        </div>
      </Fragment>
    );
  }
}

