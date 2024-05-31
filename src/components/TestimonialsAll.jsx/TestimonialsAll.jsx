import React from 'react'
import LandingPage from '../Common/services/LandingPage'
import { TopComponent } from '../Common'
import { AITop } from '../../assets/icons'
import {landingPageDataTestimonials } from '../../constatnts/landingPageData'
import { TestimonialsCard } from './TestimonialsCard'
import { useSelector } from 'react-redux'
import { selectLandingPageDetails } from '../../redux'

export const TestimonialsAll = () => {
  const data = useSelector(selectLandingPageDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataTestimonials} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
        <div className="pb-4">
          {" "}
          
         <TestimonialsCard testimonials={data?.testimonial}/>

        </div>
        </div>
    </div>
  )
}
