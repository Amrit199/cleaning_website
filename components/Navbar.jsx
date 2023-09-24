"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Miljø.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const handleMenu = () => {
    setMobile(!mobile);
  };
  return (
    <div className="w-full">
      <div className="w-full border-b-2 border-[#7fafb1] h-20 bg-white fixed p-3 md:p-9 flex items-center justify-between">
        <Link className="basis-1/4 flex items-center" href="/">
          <Image
            src={logo}
            alt="miljo"
            className="md:w-40 object-cover rounded-lg cursor-pointer"
          />
        </Link>
        <div className="basis-2/4 hidden md:flex items-center justify-around text-xl">
          <Link
            href="/services"
            className="hover:text-[#206e61] cursor-pointer"
          >
            Tjenester
          </Link>
          <Link href="/about" className="hover:text-[#206e61] cursor-pointer">
            Om Oss
          </Link>
          <Link href="/blogs" className="hover:text-[#206e61] cursor-pointer">
            Blog
          </Link>
          <Link href="/jobbs" className="hover:text-[#206e61] cursor-pointer">
            Jobb i Miljø
          </Link>
        </div>
        <Link
          href="/contact"
          className="basis-1/4 hidden md:flex items-center justify-center"
        >
          <button className="px-5 py-3 bg-[#7fafb1] hover:bg-[#C0D7D8] text-black rounded-3xl uppercase font-bold">
            Kontakt oss
          </button>
        </Link>
        {/* mobile menu icon > 800 screen */}
        <div className="flex justify-end md:hidden">
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
            <Link href="/blogs" className="hover:text-[#206e61] cursor-pointer"
            onClick={handleMenu}>
              Blog
            </Link>
            <Link href="/jobbs" className="hover:text-[#206e61] cursor-pointer" onClick={handleMenu}>
            Jobb i Miljø
          </Link>
            <Link href="/contact" className="flex items-center justify-center" onClick={handleMenu}>
              <button className="px-5 py-1 md:py-3 bg-[#4d696a] hover:bg-[#7fafb1] text-white rounded-3xl text-base uppercase font-bold md:text-xl">
                Kontakt oss
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
