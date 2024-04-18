import React from 'react'
import { Divider } from '../../../constatnts/Divider'
import { HalfBorderCard } from '../../../constatnts/HalfBorderCard'
import { processCardsMobDev } from '../../../constatnts/ProcessCardsData'
import { ServicesProcessCard } from '../../../constatnts/ServicesProcessCard'

export const Process = ({data,heading,title}) => {
  return (
    <div className='w-full mt-12'>
      <div className='flex flex-col w-full justify-center items-center gap-4 '>
            <h1 className='text-[16px] leading-5 text-dottedBorder'>{title}</h1>
            <h1 className='text-[28px] leading-10 text-custom-purple font-bold'>{heading.toUpperCase()}</h1>
            <div className='mb-8'><Divider/></div>
        </div>
        <div>
          <div>
            <ServicesProcessCard data={data}/>
          </div>
        </div>
    </div>
  )
}
