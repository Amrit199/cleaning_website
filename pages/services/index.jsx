import ServicesCard from '@/components/ServicesCard'
import { services } from '@/constants'
import React from 'react'

const index = () => {
  return (
    <div className='w-full pt-24 pb-6 text-black'>
      <h2 className='text-black text-center py-4'>Dette kan vi tilby</h2>
      <div className='w-full bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10 lg:px-16 xl:px-24 py-8 items-center gap-10'>
      {services.map((item, index) => (
        <ServicesCard key={index} item={item}/>
      ))}
      </div>
    </div>
  )
}

export default index