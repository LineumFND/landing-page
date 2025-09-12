"use client";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      className="
        relative min-h-[92vh] overflow-hidden
        bg-white text-black dark:bg-[#0A0D12] dark:text-white
      "
    >
      {/* Subtle grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid dark:bg-grid-dark radial-spot"
      />

      {/* Top bar */}
      <nav className="bg-white  dark:bg-[#0A0D12] ">
        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5">
              <Image
                src={
                  theme === "dark"
                    ? "/assets/lineum-white.png"
                    : "/assets/lineum-white.png"
                }
                alt="LINEUM logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold tracking-wide">LINEUM</span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://t.me/lineum_org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 cursor-pointer py-2 text-sm bg-[#121212] dark:bg-[#ffffff] dark:text-[#414651] text-[#D5D7DA] rounded-2xl border dark:hover:bg-black/5 dark:hover:text-[white] dark:border-white/15 hover:bg-black/5 hover:text-black  dark:hover:bg-white/5 transition">
                Join Lineum Community
              </button>
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="sm:hidden cursor-pointer p-2 rounded-md hover:bg-gray-100 hover:text-black  dark:hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sm:hidden flex gap-2 dark:bg-[#121212] px-6 py-4 border-t dark:border-white/10">
            <a
              href="https://t.me/lineum_org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 cursor-pointer text-sm bg-[#121212] dark:bg-[#ffffff] dark:text-[#414651] text-[#D5D7DA] rounded-2xl border dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition dark:hover:bg-black/5 dark:hover:text-[white] ">
                Join Lineum Community
              </button>
            </a>
            <DarkModeToggle />
          </div>
        )}
      </nav>

      {/* Main copy */}
      <div className="relative z-10 max-w-4xl mx-auto mt-[3rem] sm:text-start px-6 lg:text-center">
        <p className="text-[12px] font-semibold tracking-[0.22em] dark uppercase text-[#6D6D6D] dark:text-gray-400">
          Ownership. Control. Royalties.
        </p>

        <h1 className="mt-3  sm:text-6xl  sm:font-extrabold md:text-6xl lg:text-6xl lg:font-semibold leading-[1.05]">
          OWN YOUR DESIGNS. FOREVER.
        </h1>

        <p className="mt-4 text-[#6D6D6D] text-xl dark:text-gray-400 max-w-2xl font-normal mx-auto">
          The tokenless Lineum for architects, fashion designers, fashion
          designers, automotive designers and all design fields.
        </p>

        {/* Email + CTAs */}
        <div className="mt-6 flex flex-col lg:flex-row items-stretch lg:justify-center gap-3 max-w-md lg:max-w-4xl lg:mx-auto w-full sm:text-start">
          {/* Email input and button */}
          <div className="flex w-full lg:w-[50%] rounded-2xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 px-4 bg-[#E5E5E5] dark:bg-[#4b4a4a] outline-none text-sm"
            />
            <button
              onClick={() =>
                window.open("https://discord.gg/KUEyaUUEAs", "_blank")
              }
              className="h-11 px-4 bg-[#008891] text-white font-medium text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Join DAO button */}

          <button
            onClick={() => window.open("https://t.me/lineum_org", "_blank")}
            className="h-11 cursor-pointer sm:w-full lg:w-[25%] mt-1 px-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black text-white dark:bg-[#FFFFFF] dark:text-[black] flex items-center justify-center gap-2 whitespace-nowrap"
          >
            How It Works <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {/* Animated star */}
      <motion.div
        aria-hidden
        initial={{ y: 30, scale: 0.98, rotate: -3, opacity: 0 }}
        animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 24, stiffness: 180, delay: 0.1 }}
        className="relative z-0 mt-10 md:mt-16"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="relative mx-auto w-full max-w-[600px] aspect-[4/3]">
            <Image
              src="/assets/star.png"
              alt="3D star"
              fill
              priority
              sizes="(max-width: 768px) 88vw, (max-width: 1200px) 760px, 760px"
              className="object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.35)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
