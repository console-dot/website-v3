import React from 'react'

export const WebProcessTopDescriptions = ({topHeading,topData}) => {
  return (
    <div className='flex gap-4 w-[94%]'>
        <div className='flex flex-col w-full'>
            <h1 className='text-[16px] leading-6 font-poppins font-bold text-start text-webHeading'>
            {topHeading}
            </h1>
            <p className='text-webDescrip text-[16px]  leading-6 text-justify'>
            {topData}
            </p>
        </div>
        
    </div>
  )
}
