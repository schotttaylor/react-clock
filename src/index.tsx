import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { App } from './components/app/App';
import './index.css';

render(
  <App />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
