import React from 'react';
import MessagesHistory from '../MessagesHistory';
import MessageInput from '../MessageInput';

import './MessageBox.scss';

const MessageBox = () => (
  <div className="message-box">
    <MessagesHistory />
    <MessageInput />
  </div>
);

export default MessageBox;
