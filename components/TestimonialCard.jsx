import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="w-full px-2 py-16 md:py-32 lg:px-10 text-black">
      <div className="w-[70%] mx-auto flex items-center justify-center gap-4 bg-slate-200 p-6 rounded-xl">
        <div className=" flex items-start justify-center gap-6">
          <FaQuoteLeft size={50}/>
          <div className="flex flex-col items-start justify-between gap-6 pt-6">
            <h3 className="text-black">[testimonials.title[0]]</h3>
            <p>[testimonials.desc[0]]</p>
            <div>
              <h4 className="text-black">[testimonials.person[0]]</h4>
              <h5 className="text-black">[testimonials.work[0]]</h5>
            </div>
          </div>
          <FaQuoteRight size={50} className="self-end"/>
        </div>
        <div>
          <Image src={testimonials.img} alt={testimonials.title} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
