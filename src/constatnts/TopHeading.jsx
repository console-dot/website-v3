import React from 'react'

export const TopHeading = ({ text }) => {
    return (
        <>
            <h2 className='text-black md:text-red-500'>ConsoleDot</h2>
            <h1 className=' font-sans font-bold leading-10 md:leading-10 sm:leading-8 xs:leading-7 xxs:leading-6 xxxs:leading-5 text-[28px] md:text-[26px] sm:text-[24px] xs:text-[22px] xxs:text-[20px] xxxs:text-[18px] text-heading'>{text}</h1>
        </>
    )
}
