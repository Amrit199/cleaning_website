import React from 'react'
import home from '../public/home.jpg'

const Hero = () => {

  return (
    <div className="w-full h-full">
      <div className=" w-full flex flex-col items-center mt-9 bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover">
        <p>You relax and the job is done</p>
        <h1 className=" uppercase">Get professional cleaning</h1>
      </div>
    </div>
  )
}

export default Hero