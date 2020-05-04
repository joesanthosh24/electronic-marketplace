import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_fxUYTkqd0LsGOnXw5CEYGv5Y00nwMtpSja";

  const tokenAlert = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My E-Commerce"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      stripeKey={publishableKey}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={tokenAlert}
    />
  );
};

export default StripeCheckoutButton;
