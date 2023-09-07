import { offers } from "@/constants";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const WithUs = () => {
  return (
    <div className="p-2 flex flex-col items-start justify-center gap-2">
      <h3 className="text-[#7fafb1]">HOS OSS FÅR DU:</h3>
      {offers.map((item, index) => (
        <div key={index} className=" flex items-center justify-center gap-2">
          <AiFillCheckCircle size={30} color="darkgreen" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WithUs;
