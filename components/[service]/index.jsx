import { services } from '@/constants'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const index = () => {
  const router = useRouter()
  const { product } = router.query
  const [service, setProject] = useState(null)

  console.log(product)

  useEffect(() => {
    if(product) {
      const fetchedProject = services.find(
        (service) => service.name === product
      )
      setProject(fetchedProject)
    }
  }, [product])
  if (!service) {
    return <div className='pt-28 pb-8'>Loading...</div>
  }
  return (
    <div className='w-full pt-24 pb-6 text-black'>
      <Image src={service.img} className="w-full rounded-lg" alt={service.name}/>
        <h3 className=" text-black">{service.name}</h3>
        <p>{service.desc}</p>
    </div>
  )
}

export default index