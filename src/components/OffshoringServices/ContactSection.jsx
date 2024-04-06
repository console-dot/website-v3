import React from 'react'
import { imageGit } from '../../assets/images'

export const ContactSection = ( ) => {
  return (
    <div className="bg-gradient-to-r from-custom-blue to-custom-purple md:w-[85%] w-[93%] flex flex-col justify-center items-center p-[2rem] relative mt-12 md:ml-[110px] ml-[13.5px]">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-purple"></div>
        <img
          src={imageGit}
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-bold md:text-[28px] text-[16px] sm:text-center text-white mb-4 font-poppins">
            
            GET IN TOUCH WITH CONSOLEDOT
          </h2>
          <p className="text-white text-center md:text-[16px] text-[12px] font-poppins mb-6">
            Get in touch with us to avail our services
          </p>
          <button
            type="button"
            className="relative flex items-center justify-center bg-transparent border border-white hover:bg-white text-white hover:text-custom-purple md:px-20 p  md:py-2.5 px-16 py-2  rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
          >
            <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
              Get In Touch
            </p>
          </button>
        </div>
      </div>
  )
}
export const ContactSection1 = ( ) => {
    return (
      <div className="bg-gradient-to-r from-custom-blue to-custom-purple md:w-[85%] w-[93%] flex flex-col justify-center items-center p-[2rem] relative   ">
          <div className="absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-purple"></div>
          <img
            src={imageGit}
            alt="Background Image"
            className="absolute inset-0 object-cover w-full h-full opacity-20"
          />
  
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-bold md:text-[28px] text-[16px] sm:text-center text-white mb-4 font-poppins">
              
              INQUIRE NOW
            </h2>
            <p className="text-white text-center md:text-[16px] text-[12px] font-poppins mb-6">
              Get in touch with us to avail our services
            </p>
            <button
              type="button"
              className="relative flex items-center justify-center bg-transparent border border-white hover:bg-white text-white hover:text-custom-purple md:px-20 p  md:py-2.5 px-16 py-2  rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
            >
              <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
                Get In Touch
              </p>
            </button>
          </div>
        </div>
    )
  }
  