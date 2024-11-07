import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 xl:pt-20 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to Our newsletter
            </h2>
            <p>Be the first to know about new products and offers.</p>
          </div>
          <form className="flex flex-col w-full xl:flex-row max-w-[720px] mx-auto gap-5 align-middle">
            <Input placeholder="Enter your email" />
            <button className="btn btn-accent w-full xl:w-[150px] h-[60px] ">
              Join
            </button>
          </form>

          {/* socials */}
          <div className="flex gap-8 text-[20px] text-white/60 justify-center mb-12">
            <Link href="">
              <RiYoutubeFill />
            </Link>
            <Link href="">
              <RiTwitterFill />
            </Link>
            <Link href="">
              <RiFacebookFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
          </div>
        </div>
        <div className="py-6 border-t border-white/5 text-white/60 text-center">
          Copyright &copy; 2024 <span className="text-accent">Goess</span>
          Bikezz. All right reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
