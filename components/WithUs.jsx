import { offers } from '@/constants'
import React from 'react'

const WithUs = () => {
  return (
    <div className='w-full p-2 flex flex-col items-center justify-center gap-2'>
      {offers.map((item, index) => {
        <p key={index}>{item.title}</p>
      })}
    </div>
  )
}

export default WithUs
