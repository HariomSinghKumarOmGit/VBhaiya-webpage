"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0d0b08] text-[#F6F3EC]"
        >
          {/* Subtle glowing ambient backdrop */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(184,147,74,0.12) 0%, transparent 70%)"
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            {/* Pulsing Brand Logo / Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-2"
            >
              <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-[#F6F3EC]">
                inner<span className="italic text-[#D4AF37]">light</span>
              </h1>
              <p className="text-[0.75rem] md:text-[0.82rem] tracking-[0.25em] text-[#D9BE87]/80 uppercase font-medium">
                A quiet space by Vishal Gautam
              </p>
            </motion.div>

            {/* Subtle animated bar */}
            <div className="w-36 h-[2px] bg-[#B8934A]/20 relative overflow-hidden rounded-full mt-4">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
