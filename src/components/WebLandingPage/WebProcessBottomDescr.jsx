import React from 'react'

export const WebProcessBottomDescr = ({bottomHeading,bottomData}) => {
  return (
    <div className='flex gap-4'>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            {bottomHeading}
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            {bottomData}
            </p>
        </div>
        
    </div>
  )
}
