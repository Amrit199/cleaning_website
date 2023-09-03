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
    </div>
  );
};

export default index;
