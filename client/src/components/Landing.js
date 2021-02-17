import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Landing extends Component {
  render() {
    if (this.props.auth) return <Redirect to={"/surveys"} />;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Fullstack-ReactNode</h1>
        Collect feedback from your users
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
