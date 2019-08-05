import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const currentStreamId = this.props.match.params.id;
    this.props.fetchStreams(currentStreamId);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    const currentStreamId = this.props.match.params.id;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${currentStreamId}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  render() {
    if (this.props.stream) {
      return (
        <div className="ui container">
          <video ref={this.videoRef} style={{ width: "100%" }} controls />
          <div className="ui segment">
            <h2 className="header">{this.props.stream.title}</h2>
            <div className="description">{this.props.stream.description}</div>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamShow);
