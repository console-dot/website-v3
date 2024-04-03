import React from 'react'
import { Divider } from '../../../constatnts/Divider'
import { ServicesImage } from '../../../assets/icons'




export const TopComponent = ({title,heading, description , image}) => {
  return (
    <div className='flex w-full gap-16'>
        <div className='flex flex-col gap-2 items-start w-1/2'>
            <h1 className='text-[16px] leading-5 text-dottedBorder'>{title}</h1>
            <h1 className='text-[28px] leading-10 text-dottedBorder font-bold'>{heading.toUpperCase()}</h1>
            <div className='mb-8'><Divider/></div>
            <p className='text-webDescrip text-[16px] leading-6'>
            {description}
            </p>
        </div>
        <div className='w-1/2'>
            <ServicesImage/>
        </div>
    </div>
  )
}
