import ContactForm from "@/components/ContactForm";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import Savetime from "@/components/Savetime";
import React from "react";

const index = () => {
  return (
    <div className="w-full pt-20 h-full">
      <Hero />
      <Quality />
      <Savetime />
      <div className="w-full bg-slate-100 px-2 py-10 lg:px-10">
          <Featured />
      </div>
      <div className="w-full py-10">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-slate-100 mx-auto border-2 border-[#7fafb1] rounded-xl shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default index;
