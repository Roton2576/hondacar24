import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw8PoA95mBvs4PsIoPdoYAVOf3aH3TqiH4G4Pg2NFZz8kfgLz5GoxY0YqyRRVcHlngq373gVBgFwRAKdk8t7QTu00qGjKHFvE')

const Payment = () => {
     const { orderId } = useParams();
     const [ payment, setPayment ] = useState({});

     useEffect(() => {
          fetch(`http://localhost:5000/order/${orderId}`)
          .then(res => res.json())
          .then(data => setPayment(data))
     },[orderId]);

     return (
          <div>
               <h2> User Name: { payment.displayName } </h2>
               <h3> Car Name: { payment.serviceName } </h3>
               <h3> Pay: ${ payment.price } </h3>

               { payment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                         payment={ payment }
                    />
               </Elements>}
          </div>
     )
}

export default Payment