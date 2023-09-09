import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className=" w-full pt-24 pb-6 bg-slate-100">
      <div className="pt-6 md:pt-20">
        <div className="bg-white w-[95%] md:w-[70%] lg:w-[50%] mx-auto rounded-lg shadow-xl my-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
