import React from 'react';
import './Message.scss';

const Message = ({ text }) => (
  <div className="message">
    <div className="message-tag">
      {text}
    </div>
  </div>
);

export default Message;
