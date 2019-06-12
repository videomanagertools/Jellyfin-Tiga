import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "../containers/Home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
