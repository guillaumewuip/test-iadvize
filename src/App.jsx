import React from 'react';
import { connect } from 'react-redux';

import MessageBox from './components/MessageBox';

import { newMessage } from './actions';

const filterMessages = (messages, who) => messages
  .filter((message) => message.from === who || message.to === who);

const App = ({ send, messages }) => (
  <div className="message-box-container">
    <MessageBox
      from="Alice"
      messages={filterMessages(messages, 'Alice')}
      send={(message) => send(message, 'Alice', 'Bob')}
    />
    <MessageBox
      from="Bob"
      messages={filterMessages(messages, 'Bob')}
      send={(message) => send(message, 'Bob', 'Alice')}
    />
  </div>
);

const mapStateToProps = (state) => ({
  messages: state,
});

export default connect(mapStateToProps, {
  send: newMessage,
})(App);
