import React, { Component } from "react";
import StripCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends Component {
  amount = parseFloat(this.props.amount) * 100;
  description = `$${this.props.amount} for ${this.props.amount} emails`;
  render() {
    return (
      <StripCheckout
        name={`FeedBack`}
        description={this.description}
        amount={this.amount}
        token={(token) =>
          this.props.handleToken(token, this.amount, this.description)
        }
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button
          className={`btn ${this.props.modalClass}`}
          onClick={() => this.props.onClose()}
        >
          Add Credits
        </button>
      </StripCheckout>
    );
  }
}

export default connect(null, actions)(Payment);
