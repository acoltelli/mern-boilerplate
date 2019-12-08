import React, { Component } from "react";
import "./Layout.css";
import "./Dashboard.css";
import { connect } from "react-redux";
import {  } from "../../actions/dataActions";


class Dashboard extends Component {
  state = {

  };


  render() {
    let content;
    let data = this.props.data;
      content = (
        <>
        <h3>Hello world</h3>
        <h3>  {this.props.data}  </h3>

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
  data: state.data
});

export default connect(
  mapStateToProps,
  { }
)(Dashboard);
