import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Ticks from './Ticks';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ticks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
