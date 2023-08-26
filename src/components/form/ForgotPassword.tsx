import Button from "./Button";

const ForgotPassword = () => {
  return (
    <div className='bg-white dark:bg-gray-900 '>
      <div className='container flex items-center justify-center min-h-screen px-6 mx-auto -mt-32'>
        <form className='w-full max-w-md'>
          <div className='flex items-center justify-center mt-6'>
            <p className='w-2/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300'>
              Reset Password
            </p>
          </div>
          <div className='relative flex items-center mt-6'>
            <span className='absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </span>
            <input
              type='email'
              className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Email address'
            />
          </div>
          <div className='mt-6'>
            <Button type='submit' label='Forget Password' className='my-1' />
            <div className='mt-6 text-center '>
              <a
                href='#'
                className='text-sm text-blue-500 hover:underline dark:text-blue-400'
              >
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
