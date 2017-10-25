import React from 'react';
import './MessageInput.scss';

class MessageInput extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.clickHandler(this.input.value);
    this.input.value = null;
  }

  render() {
    return (
      <div className="message-input">
        <input
          type="text"
          className="message-input-text"
          ref={(input) => { this.input = input; }}
        />
        <div className="message-input-send">
          <button
            type="button"
            className="button"
            onClick={this.onClick}
          >
            →
          </button>
        </div>
      </div>
    );
  }
}

export default MessageInput;
