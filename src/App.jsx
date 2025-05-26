import React from 'react'
import { Img } from './components/Img'
import { Info  } from './components/Info'
import { Usuario } from './components/Usuario'

export const App = () => {
  return (
    <>
    <div className='bg-[#14273e] p-4 w-2xs rounded-xl flex flex-col gap-3 shadow-2xl'>
      <Img></Img>
      <h2 className='text-amber-50 text-[20px] font-semibold'>Equilibrium #3429</h2>
      <p className='text-gray-500'>Our Equilibrium collection promotes balance and calm.</p>
      <Info></Info>
    <hr className='text-gray-700'/>
    <Usuario></Usuario>
    </div>
    </>
  )
}
