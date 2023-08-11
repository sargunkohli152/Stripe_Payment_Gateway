import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";


const PUBLIC_KEY = "pk_test_51NddYRSCFnkorq3z6esl9Tc8dPyKAq9bRLlj2c2N6u6CWxbx0p6z4FtNwDzbIRZaoJ4Wur5m5Z660NXNMs2KGJQI00aRYIeGmR";
const stripTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer