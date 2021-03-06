import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './App';

import '../styles/index.scss';

console.log('🚀 Starting app');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('.js-app')
);
