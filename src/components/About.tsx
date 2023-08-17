import React from "react";
import Laptop from "../assets/laptop.jpg";

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4 mt-[-150px]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#64B937] font-bold '>
            FEEDBACK ANALYTICS DASHBOARD
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Feedback Analytics Centrally
          </h1>
          <p>
            Welcome to our feedback community! I'm your dedicated host,
            passionate about empowering voices and driving positive change.
            Together, we'll explore new horizons and improve our services. Your
            input fuels our growth, and we're committed to making your
            experience extraordinary. Join us on this journey, and let's shape a
            brighter future, one feedback at a time
          </p>
          <button className='bg-black text-[#64B937] border border-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-white hover:text-black hover:border-black transition-all'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
