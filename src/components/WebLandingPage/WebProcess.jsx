import React from 'react'
import {processCardsData} from "../../constatnts/ProcessCardsData"
import { WebProcessHeading } from './WebProcessHeading'
import { WebProcessTopDescriptions } from './WebProcessTopDescriptions'
import { WebProcessBottomDescr } from './WebProcessBottomDescr'
import { HalfBorderCard } from '../../constatnts/HalfBorderCard'
export const WebProcess = () => {
  return (
    <div className='px-16'>
      <div className='mb-4' > <WebProcessHeading/></div>
      <WebProcessTopDescriptions/>
        <HalfBorderCard data={processCardsData}/>
        <WebProcessBottomDescr/>
        
    </div>
  )
}
