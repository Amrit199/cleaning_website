import AboutCard from "@/components/AboutCard";
import ContactForm from "@/components/ContactForm";
import Featured from "@/components/Featured";
import ServicePage from "@/components/ServicePage";
import React from "react";

const index = () => {
  return (
    <div className="w-full pt-20 h-full">
      <div className="py-20 bg-[url('/home.jpg')] bg-center bg-no-repeat bg-cover bg-fixed">
      <AboutCard />
      </div>
      <ServicePage />
      <div className="w-full px-2 py-16 md:py-32 lg:px-10">
          <Featured />
      </div>
      <div className="w-full py-10 bg-[url('/clean.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center md:justify-end">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] bg-slate-100 rounded-xl m-1 sm:m-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default index;
