import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { apiUrl } from '../config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segeo UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    toast.success('Payment Successful')
    navigate('/');

    if (!error) {
      try {
        const { id } = paymentMethod;
        const email = localStorage.getItem('token')
        const response = await axios.post(`${apiUrl}/user/v1/payment`, {
          amount: 1000,
          id: id,
        });

        if (response.data.success) {
          console.log(id);
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!success ? (
        <form className="w-[720px] p-6  bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
          <fieldset className="FormGroup space-y-4">
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} className="p-2   border rounded-md" />
            </div>
          </fieldset>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit">
            Pay
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">You just bought this</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
