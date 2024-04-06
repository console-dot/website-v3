import React from 'react'

export const CircleLarge = ({text}) => {
  return (
    
        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white border-2 border-dottedBorder'>
            <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-dottedBorder'>
              <span className='text-white text-[20px] font-poppins leading-7 font-bold'>{text}</span>
            </div>
        </div>
  
  )
}
