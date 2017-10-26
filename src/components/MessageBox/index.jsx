import React from 'react';
import Message from '../Message';
import MessageInput from '../MessageInput';

import './MessageBox.scss';

const isMessageFromUser = (message, user) => message.from === user;

const isIAdvize = (message) => /iadvize/i.test(message.text);

const MessageBox = ({ from, messages, send }) => (
  <div className="message-box">
    <h1 className="message-box-title">{from}</h1>
    <div className="messages-list">
      {messages
        .reverse() // for css hack to keep scroll to bottom
        .map((message) => (
          <Message
            key={message.id}
            text={message.text}
            color={isMessageFromUser(message, from)}
            rainbow={isIAdvize(message)}
            right={isMessageFromUser(message, from)}
          />
        ))
      }
    </div>
    <MessageInput clickHandler={send} />
  </div>
);

export default MessageBox;
