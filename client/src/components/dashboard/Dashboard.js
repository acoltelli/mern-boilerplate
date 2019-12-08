import React, { Component } from "react";
import "./Layout.css";
import "./Dashboard.css";
import { getData } from "../../actions/dataActions";
import { connect } from "react-redux";


class Dashboard extends Component {
  state = {
  };

  componentDidMount() {
      this.props.getData();
    };


  render() {
    let content;
    let data = this.props.data.data;
    console.log(this.props.data.data)
    let m = data.map(m => (m["name"] ));

      content = (
        <>
        <h3>Hello world</h3>
        <h3> {m} </h3>
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
