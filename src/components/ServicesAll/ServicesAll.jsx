import React from 'react'
import LandingPage from '../Common/services/LandingPage'
import { landingPageDataServices } from '../../constatnts/landingPageData'
import { ServicesAllCard } from './ServicesAllCard'
import { selectLandingPageDetails } from '../../redux'
import { useSelector } from 'react-redux'

export const ServicesAll = () => {
  const data = useSelector(selectLandingPageDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
    <LandingPage data={landingPageDataServices} />
    <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
      <div className="pb-4">
       <ServicesAllCard expertise={data?.expertise}/>

      </div>
      </div>
  </div>
  )
}
