import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import GoogleButton from "react-google-button";
import feedbackImage from "../Utiles/images/feedback.png";

class Landing extends Component {
  centered = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  };

  renderPage() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={feedbackImage} alt="Feedback" style={{ height: 350 }} />
          <span className="card-title">Card Title</span>
        </div>

        <div
          className="card-content blue-grey white-text"
          style={{ paddingTop: 1 }}
        >
          <h1>
            <b>F</b>eed<b>B</b>ack
          </h1>
          Collect feedback from your users
          <p style={{ ...this.centered }}>
            <a href="/auth/google">
              <GoogleButton />
            </a>
          </p>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.auth) return <Redirect to={"/surveys"} />;
    return <div style={{ textAlign: "center" }}>{this.renderPage()} </div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
