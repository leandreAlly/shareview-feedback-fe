import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex justify-center items-center'>
          <Typed
            className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 py-4'
            strings={["Do people like attending my events?"]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Feedback at its Finest. Empowering Change, One Response at a Time.
        </p>
        <button className='bg-[#64B937] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
