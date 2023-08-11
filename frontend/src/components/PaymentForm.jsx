import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { apiUrl } from '../config';


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segeo UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder": {color: "#87bbfd"} 
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "ffc7ee"
        }
    }
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error){
            try{
                const {id} = paymentMethod;
                const response = await axios.post(`${apiUrl}/user/v1/payment`, {
                    amount: 1000,
                    id: id
                })
    
                if(response.data.success){
                    console.log("successful payment");
                    setSuccess(true);
                }
    
            }
            catch(error){
                console.log("Error ", error);
            }
        }
        else{
            console.log(error.message);
        }
    }

  return (
    <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>You just bought this</h2>
        </div>
        }
    </>
  )
}

export default PaymentForm