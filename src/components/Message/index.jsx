import React from 'react';
import './Message.scss';

const Message = ({ text }) => (
  <div className="message">
    {text}
  </div>
);

export default Message;
