import React from 'react';
import './MessageInput.scss';

const MessageInput = () => (
  <div className="message-input">
    <input type="text" className="message-input-text" />
    <div className="message-input-send">
      <button type="button" className="button">→</button>
    </div>
  </div>
);

export default MessageInput;
