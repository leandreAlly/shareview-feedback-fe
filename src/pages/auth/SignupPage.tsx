import middleImage from "../../assets/5920.jpg";
import SignupForm from "../../components/form/SignupForm";

const SignupPage = () => {
  return (
    <div>
      <div className='flex flex-col w-full md:flex-row md:h-full md:justify-between justify-center items-center xs:flex-grow recursive'>
        {/* <img
          src={bgImage}
          alt=''
          className='absolute inset-x-0 bottom-0 pointer-events-none'
        /> */}

        <div className='hidden mx-auto sm:flex w-[500px]'>
          <img src={middleImage} alt='' />
        </div>

        <div className='flex flex-col max-w-sm w-full mx-20'>
          <SignupForm />
          <div className='flex items-center justify-center gap-2'>
            <hr className='flex-grow border-gray-300 border-t ' />
            <span className='px-4 text-[#ACADAC]'>Or continue with</span>
            <hr className='flex-grow border-gray-300 border-t' />
          </div>
          <div className='flex items-center justify-center mt-4'></div>
          <div className='flex items-center justify-center mt-4'>
            {/* <GoogleLogin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
