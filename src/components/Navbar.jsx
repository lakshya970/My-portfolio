import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "../constants";
import Animated from "./Animated";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const items = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <nav className="h-16 w-full px-4 md:px-6 lg:px-12 flex items-center justify-between bg-neutral-900/80 backdrop-blur-sm z-10 fixed top-0">
      <h3 className="font-bold text-2xl z-20">lm.</h3>
      <button
        className="md:hidden text-white z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoCloseOutline size={30} />
        ) : (
          <HiBars3BottomRight size={30} />
        )}
      </button>

      {/* large screen navlinks */}
      <div className="hidden md:flex capitalize md:space-x-6 lg:space-x-8">
        {links.map((value) => (
          <Link
            className="hover:scale-110 duration-100 ease-in"
            to={value.text}
            smooth={true}
            offset={0}
            duration={500}
            key={value.id}
            href=""
          >
            {value.text}
          </Link>
        ))}
      </div>

      {/* hamburger */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={list}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`flex-col flex md:hidden h-screen inset-x-0 top-0 text-2xl capitalize items-center justify-center gap-10 absolute bg-neutral-900 backdrop-blur-sm`}
          >
            {links.map((value) => (
              <motion.button variants={items} key={value.id} href="">
                <Link
                  className="capitalize"
                  to={value.text}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {value.text}
                </Link>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
