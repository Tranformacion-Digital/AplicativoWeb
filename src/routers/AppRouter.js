import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from '../pages/home';
import GraficaComparativa from '../pages/graficaCoparativa';
import GraficaProceso from '../pages/graficaProceso';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/GraficaComparativa" component={GraficaComparativa}/>
                <Route exact path="/GraficaProceso" component={GraficaProceso}/>
            </Switch>
        </div>
    </Router>
  );
}
