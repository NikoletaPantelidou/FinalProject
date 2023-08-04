import React from "react";
import { loadStripe } from "@stripe/stripe-js";

//This is the publishable key
const stripePromise = loadStripe(
  "pk_test_51NbKQ0HikTenRkPOVSvxREI4lusTXc1ulbktkf7lHNyIQzGUmpMFIj5SPWEvthSBLfhI6ZFq8A4DTaCTRn6fE8Fm0081iSuphS"
);

function BuyButtonComponent() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, he is redirected  to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1NbM6xHikTenRkPO2jQdE5wf", // This is the ID of the price
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://buy.stripe.com/test_8wMaGm0l5a9Uc7u000",
      cancelUrl: "https://dashboard.stripe.com/test/payments?status[0]=failed",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button className="pay-btn" role="link" onClick={handleClick}>
      Buy
    </button>
  );
}
export default BuyButtonComponent;
