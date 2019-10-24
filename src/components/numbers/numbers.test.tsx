import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Numbers } from './numbers';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Numbers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
