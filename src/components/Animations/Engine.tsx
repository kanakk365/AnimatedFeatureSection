"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Engine = () => {
  return (
    (<div className="flex items-center justify-center w-full h-full">
      <motion.div
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image src="/globe.svg" alt="globe" width={100} height={100} />
      </motion.div>
    </div>)
  );
};
