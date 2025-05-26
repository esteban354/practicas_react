import React from 'react'
import  imagen  from './../assets/img/image-equilibrium.jpg'
import view from './../assets/img/icon-view.svg'

export const Img = () => {
  return (
  <div className='relative group'>
      <img className='w-[280px] rounded-xl' src={imagen} alt="img"/>
      <div className='bg-cyan-400 rounded-xl w-[260px] h-[256px] flex justify-center items-center absolute top-0  opacity-[0] group-hover:opacity-[0.7] transition duration-300 '>
        <img className='w-8 opacity-[1]' src={view} alt=""/>
      </div>
    </div>
  )
}
