import React, { Component } from "react";
import "./Layout.css";
import "./Dashboard.css";
import { getData } from "../../actions/dataActions";
import { connect } from "react-redux";


class Dashboard extends Component {
  state = {

  };

    componentWillMount() {
      this.props.getData();
    };



  render() {
    console.log(this.props.data.data.title)
    let content;
    let data = this.props.data;
      content = (
        <>
        <h3>Hello world</h3>
        <h3>  {this.props.data.title}  </h3>

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
