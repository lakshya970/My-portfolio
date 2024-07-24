import React from "react";
import logo from "../assets/logo.png";
import Animated from "./Animated";
import AnimateElement from "./AnimateElement";
import { motion } from "framer-motion";
import { children, parent, variants } from "../constants";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <motion.div
      id="home"
      variants={parent}
      initial="hidden"
      animate="visible"
      className="paddingX paddingY h-screen flex-col md:flex-row-reverse justify-center flex items-center relative overflow-hidden"
    >
      <AnimateElement animationName={"animate__jello"}>
        <motion.img
          variants={variants.item}
          className="max-w-[14rem] lg:max-w-sm mx-auto"
          src={logo}
          alt=""
        />
      </AnimateElement>
      <div className="space-y-6">
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="flex">
            {Array.from("Hii,").map((value, i) => (
              <motion.span key={i} variants={variants.text}>
                <Animated text={value} />
              </motion.span>
            ))}
          </span>
          <span className="flex">
            {Array.from("I'm lakshya,").map((value, i) => (
              <motion.span key={i} variants={variants.text}>
                <Animated text={value} />
              </motion.span>
            ))}
          </span>
          <span className="flex">
            {Array.from("web developer").map((value, i) => (
              <motion.span key={i} variants={variants.text}>
                <Animated text={value} />
              </motion.span>
            ))}
          </span>
        </motion.h1>
        <motion.div
          variants={variants.item}
          className="capitalize tracking-wide"
        >
          frontend developer | react.js
        </motion.div>
        <motion.button
          variants={variants.item}
          className="capitalize text-sm tracking-wider font-semibold bg-white hover:scale-105 duration-100 ease-in text-black py-2 px-4 mr-4"
        >
          <a href={resume} target="_blank">
            resume
          </a>
        </motion.button>
        <motion.button
          variants={variants.item}
          className="capitalize text-sm tracking-wider font-semibold border-2 duration-100 ease-in text-white py-1.5 px-3.5 hover:scale-105"
        >
          <Link to="contact me" smooth={true} offset={0} duration={500}>
            contact me
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
