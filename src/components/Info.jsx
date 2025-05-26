import React from 'react'
import ethereum from './../assets/img/icon-ethereum.svg'
import clock from './../assets/img/icon-clock.svg'

export const Info = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-1'>
            <img src={ethereum} alt="" srcset="" />
            <h3 className='text-cyan-400 font-semibold' >0.041ETH</h3>
        </div>

        <div className='flex items-center gap-1'>
            <img src={clock} alt="" srcset="" />
            <h3 className='text-gray-400'>3 Days left</h3>
        </div>
    </div>
  )
}
