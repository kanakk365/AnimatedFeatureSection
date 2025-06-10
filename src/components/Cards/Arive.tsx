"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Icon24Hours, Icon360, IconMessage } from "@tabler/icons-react";
import { X } from "lucide-react";

function Arive() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "h-[26rem] w-[20rem] rounded-lg bg-neutral-900",
            "shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
            "p-4 flex flex-col"
          )}
        >
          {" "}
          <h1 className="text-sm font-semibold text-neutral-100">
            UI Component Library
          </h1>
          <p className="text-sm text-neutral-400 mt-2">
            Beautifully designed components with smooth animations and modern
            styling for your next project.
          </p>
          <div className="flex items-center w-full mx-auto gap-4 ">
            <button
              className={cn(
                "flex items-center justify-center text-xs mx-auto gap-1 mt-4 cursor-pointer bg-neutral-800 text-neutral-100",
                "shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
                "px-2 py-1 rounded-md border border-neutral-700"
              )}
            >
              Components
              <X size={10} className="text-neutral-500" />
            </button>
          </div>
          <div className="relative flex-1  bg-neutral-800 border border-neutral-700 border-dashed rounded-lg mt-4">
            {" "}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute divide-y divide-neutral-700 inset-0 h-full bg-neutral-900 rounded-lg border border-neutral-700 flex flex-col justify-evenly"
            >
              {" "}
              <div className="flex gap-2 p-4">
                {" "}
                <div className="h-7 w-7 flex-shrink-0 bg-neutral-800 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-neutral-700">
                  <IconMessage className="h-4 w-4 text-neutral-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-neutral-100">
                    Interactive Elements
                  </p>
                  <p className="text-xs mt-1 text-neutral-400">
                    Responsive user interface components
                  </p>
                </div>
              </div>{" "}
              <div className="flex gap-2 p-4">
                {" "}
                <div className="h-7 w-7 flex-shrink-0 bg-neutral-800 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-neutral-700">
                  <Icon24Hours className="h-4 w-4 text-neutral-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-neutral-100">
                    Performance Optimized
                  </p>
                  <p className="text-xs mt-1 text-neutral-400">
                    Fast loading and smooth animations
                  </p>
                </div>
              </div>{" "}
              <div className="flex gap-2 p-4">
                {" "}
                <div className="h-7 w-7 flex-shrink-0 bg-neutral-800 shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-neutral-700">
                  <Icon360 className="h-4 w-4 text-neutral-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-neutral-100">
                    Customizable Design
                  </p>
                  <p className="text-xs mt-1 text-neutral-400">
                    Flexible theming and styling options
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Arive;
