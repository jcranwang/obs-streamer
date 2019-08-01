import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
