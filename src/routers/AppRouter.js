import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import ComparativeGraph from '../pages/ComparativeGraph';
import ProcessGraph from '../pages/ProcessGraph';
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ComparativeGraph" component={ComparativeGraph} />
        <Route exact path="/ProcessGraph" component={ProcessGraph} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter