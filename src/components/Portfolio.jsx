import React from "react";
import { motion } from "framer-motion";
import { projects, variants } from "../constants";
import Animated from "./Animated";

const Portfolio = () => {
  const animate = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
  return (
    <div
      id="portfolio"
      className="min-h-screen w-full paddingX paddingY space-y-6"
    >
      <motion.h1
        variants={variants.list}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex text-4xl md:text-5xl font-semibold"
      >
        {Array.from("Portfolio").map((value, i) => (
          <motion.span variants={variants.text} key={i}>
            <Animated text={value} />
          </motion.span>
        ))}
      </motion.h1>

      <motion.div {...animate} className="text-xl">
        These are some of my recent works.
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {projects.map((value) => (
          <motion.div {...animate} className="relative group" key={value.id}>
            <div className="absolute inset-0 group-hover:bg-black/50 duration-200 ease-in flex items-center justify-center">
              <a
                className="px-4 py-2 bg-white text-black text-sm md:text-base capitalize font-semibold tracking-wider opacity-0 group-hover:opacity-100 duration-200 ease-in"
                href={value.url}
                target="_blank"
              >
                view project
              </a>
            </div>
            <img className=" rounded-xl" src={value.img} alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
