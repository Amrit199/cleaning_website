import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ item }) => {
  let title = item.title.split(" ");
  let fixedtitle = title.slice(0, 6).join(" ");

  return (
    <Link
      href={`/blogs/${item.title}`}
      className="w-full p-6 flex flex-col items-start justify-between gap-4 bg-white rounded-lg"
    >
      <div className="w-full group flex flex-col items-start justify-center gap-4">
        <div className="w-full overflow-hidden">
          <Image
            src={item.img}
            alt={item.alt}
            className="w-full object-cover rounded-lg duration-300 group-hover:scale-110"
          />
        </div>
        <h4 className="text-black text-lg">{fixedtitle}</h4>
      </div>
    </Link>
  );
};

export default BlogCard;
