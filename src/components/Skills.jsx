import React from "react";
import { frontendSkills, otherSkills, variants } from "../constants";
import { motion } from "framer-motion";
import Animated from "./Animated";

const Skills = () => {
  const animate = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
  return (
    <div id="skills" className="min-h-screen w-full paddingX py-20  space-y-10">
      <motion.h1
        variants={variants.list}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex text-4xl md:text-5xl font-semibold"
      >
        {Array.from("Skills").map((value, i) => (
          <motion.span variants={variants.text} key={i}>
            <Animated text={value} />
          </motion.span>
        ))}
      </motion.h1>

      <div className="space-y-8 md:space-y-10">
        <div>
          <motion.h4
            {...animate}
            className="text-xl font-semibold tracking-wider mb-4"
          >
            Frontend
          </motion.h4>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {frontendSkills.map((value, i) => (
              <motion.div
                {...animate}
                key={i}
                className="flex items-center gap-3 w-fit bg-white text-black px-4 py-2 rounded-lg"
              >
                <img className="h-8 max-w-[5rem]" src={value.image} alt="" />
                <span className="font-semibold">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.h4
            {...animate}
            className="text-xl font-semibold tracking-wider mb-4"
          >
            Others
          </motion.h4>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {otherSkills.map((value, i) => (
              <motion.div
                {...animate}
                key={i}
                className="flex items-center gap-3 w-fit bg-white text-black px-4 py-2 rounded-lg"
              >
                <img className="h-8 max-w-[5rem]" src={value.image} alt="" />
                <span className="font-semibold">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
