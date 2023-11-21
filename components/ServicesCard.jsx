import Image from "next/image";
import React from "react";
import Link from "next/link";

const ServicesCard = ({ item }) => {
  let longTitle = item.desc.split(" ");
  let shortTitle = longTitle.slice(0, 21).join(" ");
  return (
    <Link
      href={`/services/${item.name}`}
      className="w-full p-6 flex flex-col items-start justify-between gap-4 bg-white hover:bg-white/40 rounded-lg group"
    >
      <div className="w-full group flex flex-col items-start justify-center gap-4">
        <div className="w-full overflow-hidden rounded-lg">
          <Image
            src={item.img}
            className="w-full object-cover rounded-lg duration-300 group-hover:scale-110"
            alt={item.name}
          />
        </div>
        <h3 className=" text-black text-xl">{item.name}</h3>
        <p>{shortTitle}</p>
      </div>
    </Link>
  );
};

export default ServicesCard;
