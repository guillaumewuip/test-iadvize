import React from 'react';
import './MessageInput.scss';

class MessageInput extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.props.clickHandler(this.input.value);
    this.input.value = null;
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.clickHandler(this.input.value);
      this.input.value = null;
    }
  }

  render() {
    return (
      <div className="message-input">
        <input
          type="text"
          className="message-input-text"
          ref={(input) => { this.input = input; }}
          onKeyPress={this.handleKeyPress}
        />
        <div className="message-input-send">
          <button
            type="button"
            className="button"
            onClick={this.handleClick}
          >
            →
          </button>
        </div>
      </div>
    );
  }
}

export default MessageInput;
