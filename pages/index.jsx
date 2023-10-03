import AboutCard from "@/components/AboutCard";
import ContactForm from "@/components/ContactForm";
import Featured from "@/components/Featured";
import ServicePage from "@/components/ServicePage";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constants";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <AnimatePresence>
      <div className="w-full pt-20 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-20 bg-[url('/home.jpg')] bg-center bg-no-repeat bg-cover bg-fixed"
        >
          <AboutCard />
        </motion.div>
        <ServicePage />
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full px-2 py-16 md:py-32 lg:px-10"
        >
          <Featured />
        </motion.div>
        <div className="w-full py-10 bg-[url('/clean.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-[80%] md:w-[60%] lg:w-[40%] bg-slate-100 rounded-xl m-1 sm:m-6"
          >
            <ContactForm />
          </motion.div>
        </div>
        {/* <div>
          <TestimonialCard/>
      </div> */}
      </div>
    </AnimatePresence>
  );
};

export default index;
