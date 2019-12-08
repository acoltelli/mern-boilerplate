import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/404/404";
import "./App.css";




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>

              <Route exact path="/" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
