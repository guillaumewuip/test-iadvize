import React from 'react';
import Message from '../Message';
import MessageInput from '../MessageInput';

import './MessageBox.scss';

const isMessageFromUser = (message, user) => message.from === user;

const isIAdvize = (message) => /iadvize/i.test(message.text);

class MessageBox extends React.Component {
  componentDidUpdate() {
    // keep list scroll position to bottom
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    return (
      <div className="message-box">
        <h1 className="message-box-title">{this.props.from}</h1>
        <div className="messages-list" ref={(div) => { this.list = div; }}>
          {this.props.messages
            .map((message) => (
              <Message
                key={message.id}
                text={message.text}
                color={isMessageFromUser(message, this.props.from)}
                rainbow={isIAdvize(message)}
                right={isMessageFromUser(message, this.props.from)}
              />
            ))
          }
        </div>
        <MessageInput clickHandler={this.props.send} />
      </div>
    );
  }
}

export default MessageBox;
