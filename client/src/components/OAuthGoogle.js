import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class OAuthGoogle extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.auth2
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          const authObject = window.gapi.auth2;
          authObject.getAuthInstance().isSignedIn.listen(this.onSignInChange);
          this.onSignInChange(authObject.getAuthInstance().isSignedIn.get());
        });
    });
  }

  onSignInChange = status => {
    if (status) {
      const userId = window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getId();
      this.props.signIn(userId);
    } else {
      this.props.signOut();
    }
  };

  renderBtn = () => {
    if (this.props.signedStatus) {
      return (
        <button
          className="ui google plus button"
          onClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui google plus button"
          onClick={() => window.gapi.auth2.getAuthInstance().signIn()}
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  render() {
    return <div className="item">{this.renderBtn()}</div>;
  }
}

const mapStateToProps = ({ authStatus }) => {
  return {
    signedStatus: authStatus.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(OAuthGoogle);
