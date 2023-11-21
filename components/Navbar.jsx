"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Miljø.png";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navbar } from "@/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const [mobile, setMobile] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const handleMenu = () => {
    setMobile(!mobile);
  };

  const handleOutsideClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      e.target !== buttonRef.current
    ) {
      setMobile(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="w-full">
      <div className="w-full z-20 border-b-2 border-[#7fafb1] h-20 bg-white fixed p-3 md:p-2 lg:p-9 flex items-center justify-between">
        <Link className="basis-1/4 flex items-center" href="/">
          <Image
            src={logo}
            alt="miljo"
            className="md:w-40 object-cover rounded-lg cursor-pointer"
          />
        </Link>
        <div className="basis-2/4 hidden md:flex items-center justify-around text-base lg:text-xl">
          {navbar?.map((item) => (
            <Link
              href={item.href}
              className={`${
                item.href === path
                  ? "text-black font-semibold underline underline-offset-[6px] hover:scale-100 hover:font-semibold hover:underline-offset-[6px]"
                  : ""
              }"hover:text-black hover:scale-110 hover:underline hover:underline-offset-[6px] transition-all duration-200 text-gray-600 cursor-pointer"`}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="basis-1/4 hidden md:flex items-center justify-end"
        >
          <button className="px-5 py-2 bg-[#7fafb1] hover:underline hover:underline-offset-2 hover:scale-105 transition-all duration-200 text-black rounded-3xl uppercase font-bold">
            Kontakt oss
          </button>
        </Link>
        {/* mobile menu icon > 800 screen */}
        <div className="flex justify-end md:hidden" ref={buttonRef}>
          {!mobile ? (
            <AiOutlineMenu
              onClick={handleMenu}
              size={40}
              color="black"
              className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          ) : (
            <AiOutlineClose
              onClick={handleMenu}
              size={40}
              color="black"
              className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          !mobile
            ? "fixed top-20 right-[100%] w-full bg-white transition-all ease-in duration-500"
            : " fixed z-20 top-20 right-0 w-full md:hidden bg-white transition-all ease-in duration-500"
        }
        ref={menuRef}
      >
        <div className="flex flex-col items-center justify-center gap-3 text-xl py-4">
          <Link
            href="/services"
            className="hover:text-[#206e61] cursor-pointer"
            onClick={handleMenu}
          >
            Tjenester
          </Link>
          <Link
            href="/about"
            className="hover:text-[#206e61] cursor-pointer"
            onClick={handleMenu}
          >
            Om Oss
          </Link>
          <Link
            href="/blogs"
            className="hover:text-[#206e61] cursor-pointer"
            onClick={handleMenu}
          >
            Blog
          </Link>
          <Link
            href="/jobbs"
            className="hover:text-[#206e61] cursor-pointer"
            onClick={handleMenu}
          >
            Jobb i Miljø
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center"
            onClick={handleMenu}
          >
            <button className="px-5 py-1 md:py-3 bg-[#4d696a] hover:bg-[#7fafb1] text-white rounded-3xl text-base uppercase font-bold md:text-xl">
              Kontakt oss
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
