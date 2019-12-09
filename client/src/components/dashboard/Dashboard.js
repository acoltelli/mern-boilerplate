import React, { Component } from "react";
import "./Dashboard.css";
import { getData } from "../../actions/dataActions";
import { connect } from "react-redux";
import ReactJson from 'react-json-view'


class Dashboard extends Component {
  state = {
  };

  componentDidMount() {
      this.props.getData();
    };


  render() {
    let content;
    let k = JSON.stringify(this.props.data);
    const {data} = this.props.data;
    let m = data.map( x => (x     ));
    for (let i in data){console.log(i)}


      content = (
        <>
        <h3>Hello world</h3>
        <div>{k} </div>
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
  { getData }
)(Dashboard);
