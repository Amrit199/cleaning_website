import React from 'react'
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <Link href={`/blogs/${item.title}`} className="w-full p-6 flex flex-col items-start justify-between gap-4 bg-white rounded-lg">
        <div className="h-full group flex max-w-xl flex-col items-start gap-4">
              <div className="h-3/5 w-full overflow-hidden">
                <Image
                  width={380}
                  height={350}
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className='text-black text-lg'>{item.title}</h4>
            </div>
      </Link>
  )
}

export default BlogCard