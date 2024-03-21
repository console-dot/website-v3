import React from 'react';
import CardArray from '../AboutUsCard/AboutUsCard'; // Import the CardArray component

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
        Testimonials
      </div>
      <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple mt-4">
        What They Say About Us
      </div>
      <div className="font-Rubik text-4xl font-normal leading-10 text-center mt-4">
        <div className="flex items-center lg:ml-[8%] sm:ml-">
          <div className="h-0.5 bg-custom-purple w-16"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
          <div className="h-0.5 bg-custom-purple w-16"></div>
        </div>
      </div>
      {/* Render the CardArray component here */}
      <div className='mt-4'>
      <CardArray/>
      </div>
    </div>
  );
}

export default Testimonials;
