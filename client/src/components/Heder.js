import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return (
          <>
            <li>
              <a
                className="waves-effect waves-light btn modal-trigger"
                // href="#payModal"
                onClick={() => this.props.onPayClick()}
              >
                Add Credits
              </a>
              {/* <Payment /> */}
            </li>
            <li style={{ margin: "0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <nav style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            <b>F</b>eed<b>B</b>ack
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
