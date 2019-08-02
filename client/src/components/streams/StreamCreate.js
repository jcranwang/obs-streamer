import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onFormSubmit = values => {
    this.props.createStream(values);
  };

  render() {
    return (
      <StreamForm onFormSubmit={this.onFormSubmit} formType="Create a stream" />
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
