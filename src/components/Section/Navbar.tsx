"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark theme
    document.documentElement.classList.add("dark");
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      {/* Desktop Navigation */}
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
        </div>        <div className="flex items-center gap-4">
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
    </div>
  );
}