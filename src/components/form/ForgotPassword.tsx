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
            <input
              type='email'
              className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
              placeholder='Email address'
            />
          </div>
          <div className='mt-6'>
            <button
              className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              type='button'
            >
              Forget Password
            </button>

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
