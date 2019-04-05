import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Face from './Face';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Face />, div);
  ReactDOM.unmountComponentAtNode(div);
});
