import React from 'react';
import ReactDOM from 'react-dom';

import MessageBox from './components/MessageBox';

import '../styles/index.scss';

console.log('🚀 Starting app');

ReactDOM.render(
  <div className="message-box-container">
    <MessageBox />
    <MessageBox />
  </div>,
  document.querySelector('.js-app')
);
