import React from 'react'

export const WebprocessBottomDesWeb = () => {
  return (
    <div className='flex gap-4'>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            Requirement Analysis
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            Understand client requirements, business goals, and target audience.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            Planning
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            Develop a roadmap, define features, and choose the appropriate technology stack.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            Development
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            Implement frontend and backend logic, ensuring cross-platform compatibility.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            Deployment
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            Deploy the application using containerization for consistency and scalability.
            </p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[16px] font-poppins font-bold text-start leading-[21px] text-webHeading'>
            Maintenance and Support:
            </h1>
            <p className='text-webDescrip text-[16px] text-Justify'>
            Provide ongoing maintenance, updates, and support to address any issues and ensure the application stays current and secure.
            </p>
        </div>
    </div>
  )
}
