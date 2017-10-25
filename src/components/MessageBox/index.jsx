import React from 'react';
import Message from '../Message';
import MessageInput from '../MessageInput';

import './MessageBox.scss';

const MessageBox = ({ from, messages, send }) => (
  <div className="message-box">
    <div>
      {messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          color={message.from === from}
          right={message.from === from}
        />
      ))}
    </div>
    <MessageInput clickHandler={send} />
  </div>
);

export default MessageBox;
