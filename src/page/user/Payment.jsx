import React, { useState, useEffect } from "react";
import useEcomStore from "../../store/ecomStore";
import { payment } from "../../api/stripe";

const Payment = () => {
    const token = useEcomStore((s) => s.token);
    const [clientSecret, setClientSecret] = useState("");
    
  useEffect(() => {
    payment(token)
      .then((res) => {
        console.log(res);
      //  setClientSecret(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      Payment
    </div>
  )
}

export default Payment
