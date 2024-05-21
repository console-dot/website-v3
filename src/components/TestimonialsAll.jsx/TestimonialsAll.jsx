import React from 'react'
import LandingPage from '../Common/services/LandingPage'
import { TopComponent } from '../Common'
import { AITop } from '../../assets/icons'
import {landingPageDataTestimonials } from '../../constatnts/landingPageData'
import { TestimonialsCard } from './TestimonialsCard'

export const TestimonialsAll = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataTestimonials} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
        <div className="pb-4">
          {" "}
          
         <TestimonialsCard/>

        </div>
        </div>
    </div>
  )
}
