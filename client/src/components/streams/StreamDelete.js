import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../../Modal";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    const currentStreamId = this.props.match.params.id;
    this.props.fetchStream(currentStreamId);
  }

  onApprove = () => {
    const currentStreamId = this.props.match.params.id;
    this.props.deleteStream(currentStreamId);
  };

  onDismiss = () => {
    history.push("/");
  };

  onActions = () => {
    return (
      <React.Fragment>
        <button className="ui approve primary button" onClick={this.onApprove}>
          Yes
        </button>
        <button className="ui cancel negative button" onClick={this.onDismiss}>
          No
        </button>
      </React.Fragment>
    );
  };

  renderDescription = () => {
    if (this.props.stream) {
      return `Do you want to delete stream: ${this.props.stream.title}?`;
    }
    return "Do you want to delete this stream?";
  };

  render() {
    return (
      <div>
        <Modal
          renderActions={this.onActions}
          title="Delete a stream"
          renderDescription={this.renderDescription}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
