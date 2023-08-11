import axios from "axios";
import React, { useEffect, useState } from "react";

function Payment() {

    // Can do something like this but read stripe docs will help this solve, as Im unaware to make custom payment page 
    
    // const [cardDetails , setCardDetails] = useState({
    //     cardNumber: "",
    //     month: "",
    //     year: "",
    //     cvv: "",
    //   });

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-md flex">
        <div className="p-5">
          <h1 className="text-3xl font-semibold">Complete Payment</h1>
          <p className="text-sm text-gray-600">
            Enter your Credit or Debit Card details below
          </p>
          <div className="border-2 my-5 border-gray-500">
            {/* Card Logo */}
            <div className="flex w-full flex-1">
              <input
                className="outline-none p-2"
                type="text"
                placeholder="Card Number"
                name="card"
              />
              <div className="flex max-w-sm">
                <input
                  className="outline-none py-2 max-w-sm"
                  type="text"
                  placeholder="MM/YY"
                  name="card"
                />
                <input
                  className="outline-none py-2"
                  type="password"
                  placeholder="CVV"
                  name="card"
                />
              </div>
            </div>
          </div>
          <button className="bg-[#1e4d91] text-white py-3 px-10 font-semibold rounded-md">
            Confirm Payment
          </button>
        </div>
        <div className="bg-[#f5f5f7] rounded-r-md p-5 min-w-fit flex-1">
          <h1 className="font-bold text-lg">Order Summary</h1>
          <div className="flex my-3 flex-col gap-3">
            <div className="flex w-full gap-20 justify-between">
              <p className="font-semibold text-sm">Plan Name</p>
              <p className="font-semibold text-sm">Plan Name</p>
            </div>
            <hr className="h-1" />
            <div className="flex w-full gap-10 justify-between">
              <p className="font-semibold text-sm">Billing Cycle</p>
              <p className="font-semibold text-sm">Billing Cycle</p>
            </div>
            <hr className="h-1" />
            <div className="flex w-full gap-10 justify-between">
              <p className="font-semibold text-sm">Plan Price</p>
              <p className="font-semibold text-sm">Plan Price</p>
            </div>
            <hr className="h-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
