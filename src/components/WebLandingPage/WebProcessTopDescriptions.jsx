import React from 'react'

export const WebProcessTopDescriptions = () => {
  return (
    <div className='flex gap-4 w-[94%]'>
        <div className='flex flex-col w-full'>
            <h1 className='text-[16px] leading-6 font-poppins font-bold text-start text-webHeading'>
            Impact Analysis:(in case of adding new feature in existing system)
            </h1>
            <p className='text-webDescrip text-[16px]  leading-6 text-justify'>
            Assess the potential impact of the new features or changes on the existing system.
            Identify dependencies and potential areas of conflict with the current functionality.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-6 text-webHeading'>
            Design
            </h1>
            <p className='text-webDescrip leading-6 text-[16px] text-justify'>
            Create wireframes and design user interfaces with a focus on user-centric principles.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-6 text-webHeading'>
            Testing
            </h1>
            <p className='text-webDescrip leading-6 text-[16px] justify'>
            Conduct thorough testing, including unit testing, integration testing, and user acceptance testing.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-6 text-webHeading'>
            Optimization
            </h1>
            <p className='text-webDescrip leading-6 text-[16px] text-justify'>
            Fine-tune performance, ensuring a seamless user experience.
            </p>
        </div>
    </div>
  )
}
