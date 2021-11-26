import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ payment }) => {
     const { price, displayName } = payment;

     const [ error, setError ] = useState('');
     const [ clientSecret, setClientSecret ] = useState('');
     const [ success, setSuccess ] = useState('');
     const { user } = useAuth();

     useEffect(() => {
          fetch('http://localhost:5000/create-payment-intent', {
               method: 'POST',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify({ price })
          })
          .then(res => res.json())
          .then(data => setClientSecret(data.clientSecret))
     }, [price]);

     const stripe = useStripe();
     const elements  = useElements();

     const handleSubmit = async(e) => {
          e.preventDefault();

          if (!stripe || !elements) {
               return;
          }
          const card = elements.getElement(CardElement);
          if(card === null) {
               return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
               type: 'card',
               card
          });

          if(error) {    
               setError(error.message);
               setSuccess('');
          } else {
               setError('');
               console.log(paymentMethod);
          }

          //Payment intent hare
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
               clientSecret,
               {
                 payment_method: {
                   card: card,
                   billing_details: {
                     name: displayName,
                     email: user.email
                   },
                 },
               },
             );

             if(intentError) {
               setError(intentError.message);
               setSuccess('');
             } else {
                  setError('');
                  setSuccess('Your payment process successfully');
                  console.log(paymentIntent);
             }

     }

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <CardElement
                    options={{
                         style: {
                         base: {
                         fontSize: '16px',
                         color: '#424770',
                         '::placeholder': {
                              color: '#aab7c4',
                         },
                         },
                         invalid: {
                         color: '#9e2146',
                         },
                         },
                    }}
                    />
                    <button type="submit" disabled={!stripe}>
                         Pay ${price}
                    </button>
               </form>
               { error && <p> { error } </p> }
               { success && <p> { success } </p> }
          </div>
     )
}

export default CheckoutForm
