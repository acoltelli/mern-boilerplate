import React, { Component } from "react";
import "./MainContent.css";
import "./Dashboard.css";
import { connect } from "react-redux";
import {  } from "../../actions/dataActions";


class Dashboard extends Component {
  state = {

  };


  render() {
    let content;
      content = (
        <>
        <h3>Hello world</h3>
        </>
      );


    return (
      <div className="main-content">
        <h1 className="header">Title</h1>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({


});

export default connect(
  mapStateToProps,
  { }
)(Dashboard);
