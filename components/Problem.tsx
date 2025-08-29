"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="relative lg:px-6 py-20 max-w-7xl mx-[5rem] sm:text-start dark:bg-[#0A0D12] mb-5 sm:p-1">
      <div>
        <p className="text-[#008891] sm:text-2xl md:text-2xl text-xs uppercase tracking-[0.22em] font-semibold">
          The Gaps We Bridge
        </p>
        <h2 className="text-xs md:text-2xl font-bold text-[#181D27] mt-2">
          THE SYSTEM IS BROKEN
        </h2>
        <p className="mt-4 max-w-md text-[#535862] dark:text-gray-400">
          You create. You sell. You lose control. Your work generates value, but
          you don't share in it.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Copy + feature cards */}

        <div className="mt-10   ">
          <h2 className="text-xs md:text-2xl font-bold text-[#494949] mt-2">
            How we Are Changing That
          </h2>

          <div className="mt-10 grid  grid-col-2 lg:grid-cols-2 sm:grid-cols-2 gap-5">
            <div className="p-6  rounded-2xl glass !bg-[#F9F9F9] dark:!bg-[#242424]">
              <h3 className="font-semibold text-[#5B5B5B] mb-2">
                NO SPECULATION TOKEN
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A LINEUM focused solely on ownership, not pump-and-dump price
                games.
              </p>
            </div>

            <div className="p-6  rounded-2xl glass lg:row-span-2  !bg-[#F9F9F9] dark:!bg-[#242424]">
              <h3 className="font-semibold text-[#5B5B5B] mb-2">
                REAL-WORLD <br /> IMPACT
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tokenize blueprints, fashion lines, and concepts to fund
                physical creation.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass col-span-2 sm:col-span-2 !bg-[#F9F9F9] dark:!bg-[#242424]">
              <h3 className="font-semibold text-[#5B5B5B] mb-2">
                DESIGNER-LED GOVERNANCE
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You vote on proposals, grants, and the future of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Robot art */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          viewport={{ once: true, amount: 0.35 }}
          className="order-last lg:order-none dark:!bg-[#242424] rounded-3xl p-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="relative w-full max-w-[400px] mx-auto aspect-square"
          >
            <Image
              src="/assets/robot.png"
              alt="DAO robot"
              fill
              sizes="(max-width: 1024px) 88vw, 560px"
              className="object-contain p-0 drop-shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
