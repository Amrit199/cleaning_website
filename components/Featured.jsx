import Image from "next/image";
import React from "react";
import byporten from "../public/byporten.jpg";
import fonebu from "../public/fonebu.jpg";
import glasmagasinet from "../public/glasmagasinet.jpg";

const Featured = () => {
  return (
    <div className="w-[90%] mx-auto text-center">
      <h3 className="text-black py-8">Dette er våre kunder...</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 lg:gap-10">
        <div>
          <Image
            src={byporten}
            alt="Byporten"
            className="w-auto rounded-xl"
          />
          <p className="text-xl">Byporten</p>
        </div>
        <div>
          <Image
            src={fonebu}
            alt="Fonebu"
            className="w-auto rounded-xl"
          />
          <p className="text-xl">Fonebu</p>
        </div>
        <div>
          <Image
            src={glasmagasinet}
            alt="Glasmagasinet"
            className="w-auto rounded-xl"
          />
          <p className="text-xl">Glasmagasinet</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
