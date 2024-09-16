const NewsLetter = () => {
  return (
    <div>
      <div className='mt-28 grid items-center justify-center'>
        <div className=' '>
          {/* Inpute section */}
          <div className='bg-white p-6'>
            <div className='mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
              <div className='text-center'>
                <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'>
                  Subscribe Newsletter & Get <br />
                  Shoes News{' '}
                </h2>
              </div>
            </div>
            <form action='#' className='space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8'>
              <div>
                <div className='relative'>
                  <form action=''>
                    <input
                      type='email'
                      className='w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm'
                      placeholder='Input your Email'
                    />
                    <label className='absolute inset-y-0 end-0 grid place-content-center p-2 px-4'>
                      <button className='inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
                        Subscribe Now
                      </button>
                    </label>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
