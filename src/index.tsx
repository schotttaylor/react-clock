import App from './components/app/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
