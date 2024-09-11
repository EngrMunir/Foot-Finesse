import Image from 'next/image';
import React from 'react';

function Faq() {
  return (
    <div className='mx-auto max-w-7xl py-20'>
      <h2 className='mb-6 text-6xl font-medium'>Faq&apos;s</h2>
      <div className='flex gap-8'>
        <div>
          <Image src={'https://i.ibb.co/4wLwGm2/pic5.jpg'} alt='img' width={500} height={300} />
        </div>
        {/* accordion */}
        <div className='w-1/2 space-y-4'>
          <div className='collapse collapse-plus border border-primary bg-inherit'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>
              What types of shows do you offer?
            </div>
            <div className='collapse-content'>
              <p>
                We offer a wide variety of shows, including live concerts, theater performances,
                comedy events, sports games, and festivals. Whether you&apos;re interested in music,
                drama, comedy, or live sports, you&apos;ll find something to enjoy!
              </p>
            </div>
          </div>

          <div className='collapse collapse-plus border border-primary'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>What sizes are available?</div>
            <div className='collapse-content'>
              <p>
                Since we sell tickets for shows and events, there are no sizes involved. You can
                choose from different seating options based on availability.
              </p>
            </div>
          </div>

          <div className='collapse collapse-plus border border-primary'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>
              What payment methods do we accept?
            </div>
            <div className='collapse-content'>
              <p>
                We accept various payment methods, including credit/debit cards, mobile payments,
                and online banking. Popular options like Visa, MasterCard, PayPal, and mobile
                wallets are supported.
              </p>
            </div>
          </div>
          <div className='collapse collapse-plus border border-primary'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>
              cancel my order after it has been placed?
            </div>
            <div className='collapse-content'>
              <p>
                Once an order has been placed, cancellations are subject to our policy. Please
                contact our customer service team as soon as possible for assistance with
                cancellations or refunds
              </p>
            </div>
          </div>
          <div className='collapse collapse-plus border border-primary'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>
              What are your shipping options?
            </div>
            <div className='collapse-content'>
              <p>
                Since we primarily sell tickets for shows and events, shipping is not applicable.
                Tickets are typically delivered electronically via email or available for pickup at
                the venue.
              </p>
            </div>
          </div>
          <div className='collapse collapse-plus border border-primary'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title text-xl font-medium'>
              How do I return or exchange an item?
            </div>
            <div className='collapse-content'>
              <p>
                For show tickets, returns or exchanges are generally not allowed. If you need
                assistance with your ticket, please contact our customer service team to discuss any
                potential options or issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
