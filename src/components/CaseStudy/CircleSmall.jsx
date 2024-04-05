import React from 'react'

export const CircleSmall = ({text}) => {
  return (
    
        <div className='w-[30px] h-[30px] rounded-full flex items-center bg-white justify-center border-2 border-dottedBorder'>
        <span className='text-dottedBorder text-[18px] font-poppins leading-7 font-bold'>{text}</span>
        </div>
   
  )
}
