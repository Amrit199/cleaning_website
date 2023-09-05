import Image from "next/image";
import React from "react";
import Link from "next/link";

const ServicesCard = ({ item }) => {
  let longTitle = item.desc.split(" ");
  let shortTitle = longTitle.slice(0, 42).join(" ");
  return (
    <div className="w-full p-6 flex flex-col items-start justify-between gap-4 bg-white rounded-lg">
      <Link href={`/services/${item.name}`}>
        <Image src={item.img} className="w-full rounded-lg" alt={item.name}/>
        <h3 className=" text-black">{item.name}</h3>
        <p>{shortTitle}</p>
      </Link>
    </div>
  );
};

export default ServicesCard;
