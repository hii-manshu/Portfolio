"use client";
import React from "react";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButton } from "react-paypal-button-v2";

function PaypalPaymentGateway({ amount }) {
  return (
    <div>
      <PayPalButton
        amount={`${amount}`}
        onSuccess={(details, data) => {
          // Handle successful payment here
        }}
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "USD",
        }}
      />
    </div>
  );
}

export default PaypalPaymentGateway;
