import ContactForm from '@/components/ContactForm'
import ServicePage from '@/components/ServicePage'
import ServicesCard from '@/components/ServicesCard'
import { services } from '@/constants'
import React from 'react'

const index = () => {
  return (
    <div className='w-full pt-24 pb-6 text-black'>
      <ServicePage />
      <div className="w-full py-10">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-slate-100 mx-auto border-2 border-[#7fafb1] rounded-xl shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default index