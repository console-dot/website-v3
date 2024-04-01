import React from 'react'
import WebLandingPage from '../components/WebLandingPage/WebLandingPage'
import { WebProcessCard } from '../components/WebLandingPage/WebProcessCard'
import { processCardsData } from '../constatnts'

export const WebDevelopment = () => {

  return (
    <div>
        <WebLandingPage/>
        <WebProcessCard data={processCardsData}/>
    </div>
  )
}
