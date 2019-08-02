import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  
  render() {
    if (this.props.streamList) {
      return <div>Stream Show</div>;
    }
    return null;
  }
}

const mapStateToProps = ({ streams }) => {
  return {
    streamList: Object.values(streams)
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamShow);
