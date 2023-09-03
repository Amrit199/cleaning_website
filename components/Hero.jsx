import React from 'react'
import home from "../public/home.jpg"
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full">
      <div className=" w-full flex flex-col items-center mt-9">
        <p>You relax and the job is done</p>
        <h1 className=" uppercase">Get professional cleaning</h1>
      </div>
    </div>
  )
}

export default Hero