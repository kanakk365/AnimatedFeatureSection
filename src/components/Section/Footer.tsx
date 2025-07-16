"use client"
import React from "react";
import WaveAnimation from "../Animations/Wave";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white select-none md:h-screen flex flex-col justify-between">
      <div className="h-[60vh] ">

      </div>
      {/* Animated wave at the bottom of the footer */}
      <div className="mt-8" >
        <WaveAnimation />
      </div>
    </footer>
  );
};

export default Footer;
