import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals active visible"
        onClick={this.props.onDismiss}
      >
        <div
          className="ui modal transition visible active"
          onClick={e => e.stopPropagation()}
        >
          <div className="header">{this.props.title}</div>
          <div className="content">{this.props.renderDescription()}</div>
          <div className="actions">{this.props.renderActions()}</div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

export default Modal;
