"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu } from "lucide-react";

export default function HeroSection() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Navigation */}
      <div className="w-full fixed top-0 inset-x-0 z-50">
        <div className="hidden lg:flex flex-row self-start bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full">
          <Link
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            href="/"
          >
            <Image
              alt="logo"
              width={30}
              height={30}
              src=""
              className="rounded"
            />
            <span className="font-medium text-black dark:text-white">
              Startup
            </span>
          </Link>

          <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
            <Link
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
              href="#features"
            >
              <span className="relative z-20">Features</span>
            </Link>
            <Link
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
              href="#pricing"
            >
              <span className="relative z-20">Pricing</span>
            </Link>
            <Link
              className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
              href="#contact"
            >
              <span className="relative z-20">Contact</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>

            <Link
              className="px-4 py-2 rounded-md text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center bg-transparent shadow-none dark:text-white hidden md:block"
              href="/login"
            >
              Login
            </Link>

            <Button className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block">
              Book a call
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-4 py-2 z-50">
          <div className="flex flex-row justify-between items-center w-full">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
              href="/"
            >
              <Image
                alt="logo"
                width={30}
                height={30}
                src="/abstract-startup-logo.png"
                className="rounded"
              />
              <span className="font-medium text-black dark:text-white">
                Startup
              </span>
            </Link>
            <Menu className="h-6 w-6 text-black dark:text-white" />
          </div>
        </div>
      </div>{" "}
      {/* Hero Section */}
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900">
        {" "}
        {/* Animated Grid Background */}
        <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full rotate-0 transform select-none grid-cols-3 gap-16 md:grid-cols-6 translate-x-8 translate-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative h-full w-full">
              <div className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent opacity-40" />
              <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-600 to-transparent opacity-30" />
              {(i === 1 || i === 4) && (
                <div className="relative h-full w-full bg-gradient-to-r from-transparent via-neutral-100 to-transparent dark:via-neutral-800 opacity-50" />
              )}
            </div>
          ))}
        </div>{" "}
        {/* Edge Fade Overlay */}
        <div className="pointer-events-none absolute inset-0 z-5">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-50 via-neutral-50/80 dark:from-neutral-900 dark:via-neutral-900/80 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-50 via-neutral-50/80 dark:from-neutral-900 dark:via-neutral-900/80 to-transparent" />
          {/* Left fade */}
          <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-neutral-50 via-neutral-50/80 dark:from-neutral-900 dark:via-neutral-900/80 to-transparent" />
          {/* Right fade */}
          <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-neutral-50 via-neutral-50/80 dark:from-neutral-900 dark:via-neutral-900/80 to-transparent" />

          {/* Corner fade overlays for smoother blending */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-neutral-50 dark:from-neutral-900 to-transparent" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-50 dark:from-neutral-900 to-transparent" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-neutral-50 dark:from-neutral-900 to-transparent" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-neutral-50 dark:from-neutral-900 to-transparent" />
        </div>
        {/* Animated Particles */}
        
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
        <div className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4">
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
