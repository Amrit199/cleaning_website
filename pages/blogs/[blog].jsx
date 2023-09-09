import BlogContentCard from "@/components/BlogContentCard";
import { blogs } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const post = router.query.blog;
  const [blog, setBlog] = useState(null);

  console.log(post);

  useEffect(() => {
    if (post) {
      const fetchedPost = blogs.find((blog) => blog.title === post);
      setBlog(fetchedPost);
    }
  }, [post]);

  if (!blog) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
    <div className="w-full pt-24 pb-6 text-black bg-slate-50">
      <div className="w-full px-8 py-10 flex gap-2">
        <div className=" w-full flex flex-col items-start gap-4">
          <h3 className=" text-black">{blog.title}</h3>
          <h2 className="text-[#7fafb1]">{blog.desc}</h2>
          <Image
            src={blog.img}
            className="w-96 rounded-lg"
            alt={blog.alt}
          />
          {blog.content.map((item, index) => (
            <BlogContentCard key={index} item={item} />
          ))}
          <p>{blog.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
