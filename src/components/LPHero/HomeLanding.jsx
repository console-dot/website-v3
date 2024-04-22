import React from 'react'
import { HomeImage } from '../../assets/images'

export const HomeLanding = () => {
  return (
    <div
        className="w-full h-[850px] flex-col flex justify-between "
        style={{
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center"
        }}
      >

      </div>
  )
}
