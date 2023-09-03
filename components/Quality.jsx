import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaEnvira } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

const Quality = () => {
  return (
    <div className=" w-full h-full p-3">
      <div className=" w-full h-full flex flex-col md:flex-row items-center justify-between gap-3">
        <div className=" flex flex-col items-center justify-center p-5 gap-6 bg-slate-100 rounded-lg">
          <AiOutlineSafetyCertificate size={70} className=" text-blue" />
          <h4 className=" text-green">QUALITY</h4>
          <p className=" text-center">
            ABcOur cleaners receive continuous cleaning training and follow-up so
            that we are sure that we always deliver quality cleaning to all our
            customers.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center p-5 gap-6 bg-slate-100 rounded-lg">
          <FaEnvira size={70} className=" text-blue" />
          <h4 className=" text-green">ENVIRONMENT</h4>
          <p className=" text-center">
            We want to take our responsibility for a sustainable future and are
            therefore “ Environment Lighthouse” certified. This means that we
            only use ecolabelled cleaning products.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center p-5 gap-6 bg-slate-100 rounded-lg">
          <MdGroup size={70} className=" text-blue" />
          <h4 className=" text-green">FOLLOW-UP</h4>
          <p className=" text-center">
            Through regular quality checks and customer calls, we manage to
            maintain the quality of the cleaning, as well as have a good
            dialogue with our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
