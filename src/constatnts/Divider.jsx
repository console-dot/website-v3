import React from 'react'

export const Divider = () => {
  return (
    <div className='w-full flex justify-center items-center my-2'>
        <div className='w-[200px] h-[1px] bg-blue-500 flex justify-center items-center'>
          <div className='h-2 w-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-500'></div>
        </div>

    </div>
  )
}
