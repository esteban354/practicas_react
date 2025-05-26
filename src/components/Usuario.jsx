import React from 'react'
import usuario from './../assets/img/image-avatar.png'

export const Usuario = () => {
  return (
    <div className='flex gap-1'>
        <img className='w-7 rounded-3xl border-2 border-white' src={usuario} alt="" srcset="" />
        <p className='text-gray-500 font-semibold'>Creation of
            <span className='text-white'> julios wyvren</span>
        </p>
    </div>
  )
}
