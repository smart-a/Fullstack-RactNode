import React, { Component } from "react";
import StripCheckout from "react-stripe-checkout";

class Payment extends Component {
  render() {
    return (
      <StripCheckout
        name="Fullstack-ReactNode"
        description="$5 for 5 emails"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripCheckout>
    );
  }
}

export default Payment;
