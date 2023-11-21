import Image from "next/image";
import React from "react";
import logo from "../public/Miljø.png";
import { AiFillPhone, AiFillLinkedin } from "react-icons/ai";
import { MdLocationPin, MdEmail, MdFacebook } from "react-icons/md";
import { services } from "@/constants";
import Link from "next/link";

const content = {
  desc: "Miljø Renhold er din pålitelige partner for å opprettholde uberørte og hygieniske rom, enten det er hjemmet eller arbeidsplassen din. Vi tror at et rent miljø er avgjørende for et sunt og lykkelig liv, og vi er her for å gjøre det til en realitet for deg.",
  kontakt: {
    ph: "(+47) 40112625",
    email: "post@miljø.no",
    address: "Stenersgata 52, 0522 Oslo",
  },
  social: {
    facebook: MdFacebook,
    linked: AiFillLinkedin,
  },
};

const Footer = () => {
  return (
    <div className="w-full p-12 bg-gray-900 text-white flex flex-col md:flex-row items-start gap-4">
      <div className="basis-2/4 flex flex-col items-start justify-start gap-6 p-4">
        <Image src={logo} alt="logo" className="w-56 rounded-lg" />
        <p>{content.desc}</p>
      </div>
      <div className="basis-1/4 px-3 flex flex-col gap-6">
        <h4 className="text-[#7fafb1]">Tjenester</h4>
        <div className="flex flex-col items-start gap-2">
          {services.map((item, index) => (
            <Link key={index} href={`/services/${item.name}`} className="group">
              {item.name}
              <div className="bottom-0 h-1 bg-blue transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
      <div className="basis-1/4 px-3 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h4 className="text-[#7fafb1]">Kontaktingormasjon</h4>
          <div className="flex flex-col gap-1">
            <p className="flex items-start gap-2">
              <AiFillPhone size={20} />
              {content.kontakt.ph}
            </p>
            <p className="flex items-start gap-1">
              <MdEmail size={20} />
              {content.kontakt.email}
            </p>
            <p className="flex items-start gap-1">
              <MdLocationPin size={20} />
              {content.kontakt.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#7fafb1]">Følg oss på sosiale medier</h4>
          <div className="flex gap-3">
            <Link href="/" className="group">
              <content.social.facebook size={30} />
              <div className="bottom-0 h-1 bg-blue transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </Link>
            <Link href="/" className="group">
              <content.social.linked size={30} />
              <div className="bottom-0 h-1 bg-blue transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
