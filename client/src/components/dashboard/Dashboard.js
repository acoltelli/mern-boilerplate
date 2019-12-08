import React, { Component } from "react";
import "./Layout.css";
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
    let d = this.props.data;

    // console.log(p)
    // let m = data.map( x => (<h3> {x} </h3>)  ) ;

      content = (
        <>
        <h3>Hello world</h3>
        <ReactJson src={d} />
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
