import React from 'react'

export const Divider = () => {
  return (
    <div className='flex justify-center items-center my-2'>
        <div className='w-[200px] h-[1px] bg-toclr flex justify-center items-center'>
          <div className='h-2 w-2 rounded-full bg-gradient-to-r from-fromclr to-toclr'></div>
        </div>

    </div>
  )
}
