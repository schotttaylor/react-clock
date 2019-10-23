import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hands } from './hands';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hands />, div);
  ReactDOM.unmountComponentAtNode(div);
});
