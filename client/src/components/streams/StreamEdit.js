import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onFormSubmit = values => {
    const streamId = this.props.match.params.id;
    this.props.editStream(streamId, values);
  };

  render() {
    if (this.props.stream) {
      const { title, description } = this.props.stream;
      return (
        <StreamForm
          onFormSubmit={this.onFormSubmit}
          formHeader="Edit a stream"
          initialValues={{ title, description }}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  const streamId = ownProps.match.params.id;
  return {
    stream: streams[streamId]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
