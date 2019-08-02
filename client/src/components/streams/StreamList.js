import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditAndDeleteBtns = stream => {
    const currentUserId = this.props.authStatus.userId;
    if (currentUserId && currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
          <div className="ui red button">Delete</div>
        </div>
      );
    } else {
      return null;
    }
  };

  renderCreateBtn = () => {
    if (this.props.authStatus.userId) {
      return (
        <div className="ui right aligned basic segment">
          <Link className="ui primary button" to="/streams/new">
            Create a stream
          </Link>
        </div>
      );
    }
  };

  renderStreams = () => {
    const streamSelections = this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderEditAndDeleteBtns(stream)}
          <i className="play circle icon big" />
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
    return <div className="ui celled selection list">{streamSelections}</div>;
  };

  render() {
    if (this.props.streams) {
      return (
        <div>
          {this.renderStreams()}
          {this.renderCreateBtn()}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ streams, authStatus }) => {
  return {
    streams: Object.values(streams),
    authStatus
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
