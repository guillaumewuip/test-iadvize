import React from 'react';
import cs from 'classnames';
import './Message.scss';

const Message = ({
  text,
  color = false,
  right = false,
  rainbow = false,
}) => (
  <div className={cs('message', { 'mod-right': right })}>
    <div
      className={cs('message-tag', {
        'mod-color':   color,
        'mod-rainbow': rainbow,
      })}
    >
      {text}
    </div>
  </div>
);

export default Message;
