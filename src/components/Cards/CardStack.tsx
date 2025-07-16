"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface CodeLine {
  text: string;
  state: "error" | "success" | "normal";
}

const brokenCode: CodeLine[] = [
  { text: 'page = urlopen(url)', state: 'error' },
  { text: 'html = page.read().decode("utf-8")', state: 'error' },
  { text: 'start_idx = html.find("<title>") + len("<title>")', state: 'error' },
  { text: 'end_idx = html.find("</title>")', state: 'error' },
  { text: 'title = html[start_idx:end_idx]', state: 'error' },
  { text: '>>> title', state: 'error' },
  { text: 'page = urlopen(url)', state: 'error' },
  { text: 'html = page.read().decode("utf-8")', state: 'error' },
  { text: 'start_idx = html.find("<title>") + len("<title>")', state: 'error' },
  { text: 'end_idx = html.find("</title>")', state: 'error' },
  { text: 'title = html[start_idx:end_idx]', state: 'error' },
  { text: '>>> title', state: 'error' },
];

const fixedCode: CodeLine[] = [
  { text: 'await firecrawl.extract([', state: 'success' },
  { text: '  "https://example.com/",', state: 'success' },
  { text: '], {', state: 'success' },
  { text: '  prompt: "Extract title.",', state: 'success' },
  { text: '  schema: z.object({', state: 'success' },
  { text: '    title: z.string()', state: 'success' },
  { text: '  })', state: 'success' },
  { text: '});', state: 'success' },
];

const CardStack = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Header */}
        <div className="p-8 pb-6">
          <motion.h3
            className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            layout
          >
            Stop rewriting broken scripts
          </motion.h3>
          <motion.p
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            layout
          >
            Say goodbye to fragile scrapers that break with every site update. 
            Our AI understands content semantically and adapts automatically.
          </motion.p>
        </div>

        {/* Code Display Area */}
        <div className="relative px-8 pb-8">
          <motion.div
            className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 font-mono text-sm overflow-hidden"
            layout
            style={{
              height: isHovered ? "300px" : "400px",
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="broken"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, staggerChildren: 0.05 }}
                  className="space-y-2"
                >
                  {brokenCode.map((line, index) => (
                    <motion.div
                      key={`broken-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: [0, 1, 0.7, 1],
                        x: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }
                      }}
                      className="text-red-400 opacity-70"
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  
                  {/* Glitch effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-red-500/5"
                    animate={{
                      opacity: [0, 0.1, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="fixed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  className="space-y-3"
                >
                  {fixedCode.map((line, index) => (
                    <motion.div
                      key={`fixed-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-emerald-400 font-medium"
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  
                  {/* Success glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-emerald-500/5 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Terminal cursor */}
            <motion.div
              className="inline-block w-2 h-5 bg-slate-400 ml-1"
              animate={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Status indicator */}
          <motion.div
            className="absolute top-4 right-12 flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                isHovered ? 'bg-emerald-400' : 'bg-red-400'
              }`}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.span
              className={`text-sm font-medium ${
                isHovered 
                  ? 'text-emerald-400' 
                  : 'text-red-400'
              }`}
              layout
            >
              {isHovered ? 'AI Enhanced' : 'Script Broken'}
            </motion.span>
          </motion.div>
        </div>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 0 : 1, 
            y: isHovered ? 10 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Hover to see the magic ✨
          </div>
        </motion.div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardStack;