import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getData } from "../../actions/dataActions";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "../404/404";
import "./Layout.css";


class Layout extends Component {
  componentWillMount() {
    this.props.getData();
  };


  render() {

    let dashboardContent;

      dashboardContent = (
        <>

          <div className="right">

            <Switch>
              <Route
                exact
                path="/"
                component={Dashboard}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      );


    return (
      <Router>
        <div className="wrapper">
        {dashboardContent}
        </div>
      </Router>
    );
  }
}

Layout.propTypes = {
  
};

const mapStateToProps = state => ({
  auth: state.auth,
  habits: state.habits
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData}
  )(Layout)
);
