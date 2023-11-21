import WithUs from "@/components/WithUs";
import { services } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const product = router.query.service;
  const [service, setProject] = useState(null);

  console.log(product);

  useEffect(() => {
    if (product) {
      const fetchedProject = services.find(
        (service) => service.name === product
      );
      setProject(fetchedProject);
    }
  }, [product]);
  if (!service) {
    return <div className="pt-28 pb-8">Loading...</div>;
  }
  return (
    <div className="w-full pt-24 pb-6 text-black bg-slate-50">
      <div className="w-[80%] mx-auto lg:w-full lg:px-8 py-10 flex flex-col lg:flex-row gap-8 lg:gap-3">
        <div className=" w-full flex flex-col items-start gap-8">
          <h3 className=" text-black">{service.name}</h3>
          <h2 className="text-[#7fafb1]">Det føles bedre når ting er rent!</h2>
          <Image
            src={service.img}
            className="w-96 rounded-lg"
            alt={service.name}
          />
          <p className="text-lg leading-8">{service.desc}</p>
        </div>
        <div className="w-full flex items-start justify-center">
          <WithUs />
        </div>
      </div>
    </div>
  );
};

export default index;
