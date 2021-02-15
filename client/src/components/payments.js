import React, { Component } from "react";
import StripCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends Component {
  render() {
    return (
      <StripCheckout
        name="Fullstack-ReactNode"
        description="$5 for 5 emails"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripCheckout>
    );
  }
}

export default connect(null, actions)(Payment);
