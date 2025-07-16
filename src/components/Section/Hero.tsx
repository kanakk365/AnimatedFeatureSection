"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark theme
    document.documentElement.classList.add("dark");
  }, []);

  const AnimatedGridBackground = () => {
    const GridCell = ({
      rowIndex,
      colIndex,
    }: {
      rowIndex: number;
      colIndex: number;
    }) => {
      const horizontalGradientId = `h-gradient-${rowIndex}-${colIndex}`;
      const verticalGradientId = `v-gradient-${rowIndex}-${colIndex}`;

      return (
        <div className="flex flex-col items-start justify-center w-60">
          <div className="flex items-center justify-center">
            <div className="h-6 w-6 bg-white dark:bg-[#080808] flex items-center justify-center rounded-full">
              <div className="h-2 w-2 bg-neutral-200 dark:bg-neutral-900 rounded-full"></div>
            </div>
            {/* Animated Horizontal Line */}
            <motion.svg
              width="300"
              height="1"
              viewBox="0 0 300 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-100 dark:text-neutral-800"
            >
              <path
                d="M0.5 0.5H300"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              ></path>{" "}
              <motion.path
                d="M0.5 0.5H300"
                stroke={`url(#${horizontalGradientId})`}
                strokeWidth="1"
                initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0.5, 1],
                  pathOffset: [0, 0.5, 1],
                  opacity: [0,,0.5, 1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  delay: colIndex * 0.3 + rowIndex * 0.27,
                }}
              ></motion.path>
              <defs>
                <linearGradient
                  id={horizontalGradientId}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="0"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(156 163 175)"
                    stopOpacity="0.8"
                  ></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          {/* Animated Vertical Line */}
          <motion.svg
            width="1"
            height="140"
            viewBox="0 0 1 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-100 dark:text-neutral-800 ml-3"
          >
            <path
              d="M0.5 0.5V140"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            ></path>{" "}
            <motion.path
              d="M0.5 0.5V140"
              stroke={`url(#${verticalGradientId})`}
              strokeWidth="1"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0.5, 0],
                pathOffset: [0, 0.5, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: rowIndex * 0.2 + colIndex * 0.1,
              }}
            ></motion.path>
            <defs>
              <linearGradient
                id={verticalGradientId}
                gradientUnits="userSpaceOnUse"
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="140"
              >
                <stop offset="0%" stopColor="transparent"></stop>
                <stop
                  offset="50%"
                  stopColor="rgb(156 163 175)"
                  stopOpacity="0.8"
                ></stop>
                <stop offset="100%" stopColor="transparent"></stop>
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      );
    };

    return (
      <div
        className="absolute inset-0 w-full overflow-hidden"
        style={{ height: "150vh" }}
      >
        <div
          className="absolute inset-0 w-full pointer-events-none z-0"
          style={{ height: "150vh" }}
        >
          {" "}
          {/* Radial fade overlay - creates opacity fade from center to edges */}
          <div
            className="absolute inset-0 w-full pointer-events-none z-10"
            style={{
              height: "150vh",
              background: `radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,1) 90%)`,
            }}
          ></div>
          {/* Grid Rows */}
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex">
              {Array.from({ length: 12 }).map((_, colIndex) => (
                <GridCell
                  key={`${rowIndex}-${colIndex}`}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!mounted) return null;
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-white dark:bg-black"
        style={{ minHeight: "150vh" }}
      >
        {/* Animated Grid Background */}
        <AnimatedGridBackground />

        {/* Main Content */}
        <div className="relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl">
            Deploy your website in seconds, not hours.
          </h1>
        </div>
        <p className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200">
          With our state of the art, cutting edge, we are so back kinda hosting
          services, you can deploy your website in seconds.
        </p>
        <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20">
          <Link
            className="px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] w-40 text-center"
            href="/login"
          >
            Create account
          </Link>
          <Button className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] w-40">
            Book a call
          </Button>
        </div>
        {/* Dashboard Image */}
        <div className="relative z-20 mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4 mb-20">
          <div className="rounded-[24px] border border-neutral-200 bg-white  dark:border-neutral-700 dark:bg-black">
            <Image
              alt="Dashboard preview"
              width={1920}
              height={1080}
              src="/darkDash.png"
              className="rounded-[20px] w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
