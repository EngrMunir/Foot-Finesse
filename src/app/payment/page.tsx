'use client';
import CheckoutPage from '@/components/CheckoutPage';
import { convertToSubCurrency } from '@/lib/convertTosubCurency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('STRIPE_PUBLISHER_KEY is undefined');
}
const stipePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function page() {
  const amount = 49.99; // this will be dynamic
  return (
    <section className='grid min-h-screen place-items-center'>
      <div className='max-w-6xl rounded-lg border p-4 shadow-xl'>
        <h2 className='mb-2 text-center text-xl font-bold underline'>Payment Amount:{amount}</h2>
        <div>
          <Elements
            stripe={stipePromise}
            options={{
              mode: 'payment',
              amount: convertToSubCurrency(amount),
              currency: 'usd',
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
      </div>
    </section>
  );
}

export default page;