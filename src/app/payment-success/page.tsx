'use client';

function page({ searchParams: { amount } }: { searchParams: { amount: string } }) {
  return (
    <section className='grid min-h-screen place-items-center'>
      <div className='min-w-6x text-center'>
        <h2 className='text-5xl'>Thank You</h2>
        <h3 className='text-2xl'>Your payment was successful</h3>
        <button className='btn btn-success btn-block mt-4 rounded-none font-bold text-white'>
          ${amount}
        </button>
      </div>
    </section>
  );
}

export default page;
