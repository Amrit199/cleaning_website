import React from "react";
import ServicesCard from "@/components/ServicesCard";
import { services } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

const ServicePage = () => {
  return (
    <AnimatePresence>
      <div className=" w-full">
        <h2 className="text-black text-center py-10">Dette kan vi tilby</h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10 lg:px-16 xl:px-24 py-10 items-center gap-10"
        >
          {services.map((item, index) => (
            <ServicesCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServicePage;
