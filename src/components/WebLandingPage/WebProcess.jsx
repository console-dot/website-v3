import React from 'react'
import { WebProcessCard } from './WebProcessCard'
import {processCardsData} from "../../constatnts/ProcessCardsData"
import { WebProcessHeading } from './WebProcessHeading'
import { WebProcessTopDescriptions } from './WebProcessTopDescriptions'
import { WebProcessBottomDescr } from './WebProcessBottomDescr'
export const WebProcess = () => {
  return (
    <div className='p-16'>
      <div className='mb-4' > <WebProcessHeading/></div>
      <WebProcessTopDescriptions/>
        <WebProcessCard data={processCardsData}/>
        <WebProcessBottomDescr/>
    </div>
  )
}
