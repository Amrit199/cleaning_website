import BlogCard from '@/components/BlogCard'
import ContactForm from '@/components/ContactForm'
import { blogs } from '@/constants'
import React from 'react'

const index = () => {
  return (
    <div className='w-full pt-24 pb-6 text-black'>
        <h2 className='text-black text-center py-10'>Blogg</h2>
        <div className='w-full bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-10 lg:px-16 xl:px-24 py-10 items-center justify-center gap-10'>
            {blogs.map((item, index) => (
                <BlogCard key={index} item={item} />
            ))}
        </div>
        <div className="w-full py-10">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-slate-100 mx-auto border-2 border-[#7fafb1] rounded-xl shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default index