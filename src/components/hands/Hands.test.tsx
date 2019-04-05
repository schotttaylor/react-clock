import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hands from './Hands';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hands />, div);
  ReactDOM.unmountComponentAtNode(div);
});
