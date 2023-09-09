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
      <div className="w-full px-1 md:px-8 py-10 flex items-start justify-center gap-2">
        <div className="w-[95%] md:w-[70%] mx-auto flex flex-col items-center justify-center gap-8">
          <h5>Renhold</h5>
          <h2 className="text-center text-black">{blog.title}</h2>
          <p className="text-lg">{blog.desc}</p>
          <Image
            src={blog.img}
            className="rounded-lg"
            alt={blog.alt}
          />
          {blog.content.map((item, index) => (
            <BlogContentCard key={index} item={item} />
          ))}
          <p className="text-lg">{blog.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
