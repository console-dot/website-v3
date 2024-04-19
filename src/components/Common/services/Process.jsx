import React from 'react'
import { Divider } from '../../../constatnts/Divider'
import { HalfBorderCard } from '../../../constatnts/HalfBorderCard'
import { processCardsMobDev } from '../../../constatnts/ProcessCardsData'
import { ServicesProcessCard } from '../../../constatnts/ServicesProcessCard'

export const Process = ({data,heading,title}) => {
  return (
    <div className='w-full mt-12'>
      <div className='flex flex-col gap-2 sm:text-center xs:text-center xxs:text-center md:text-center lg:text-start xl:text-start 2xl:text-start w-full md:w-full sm:w-full xs:w-full xxs:w-full'>
            <h1 className='text-[16px] leading-5 text-dottedBorder'>{title}</h1>
            <h1 className='text-[28px] leading-10 text-custom-purple sm:text-center xs:text-center xxs:text-center md:text-center lg:text-start xl:text-start 2xl:text-start  w-full font-bold'>{heading.toUpperCase()}</h1>
            <div className='mb-8 flex w-full sm:justify-center xs:justify-center xxs:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start'><Divider/></div>
        </div>
        <div>
          <div className='' >
            <ServicesProcessCard data={data}/>
          </div>
        </div>
    </div>
  )
}
