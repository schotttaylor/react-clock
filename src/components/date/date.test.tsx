import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DateDisplay } from './date';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
