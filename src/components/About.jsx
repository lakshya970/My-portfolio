import React from "react";
import { variants } from "../constants";
import Animated from "./Animated";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about me"
      className="min-h-screen paddingX paddingY space-y-10"
    >
      <motion.h1
        variants={variants.list}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-400px 0px 0px 0px",
          amount: "all",
        }}
        className="flex text-4xl md:text-5xl font-semibold"
      >
        {Array.from("About Me").map((value, i) => (
          <motion.span variants={variants.text} key={i}>
            <Animated text={value} />
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="font-light"
      >
        Hi, I'm Lakshya Mahawar, a front-end developer based in Jaipur. I'm
        passionate about creating visually appealing and user-friendly websites
        that deliver exceptional user experiences. With 2 years of experience in
        web development, I have a strong understanding of HTML, CSS, JavaScript,
        React js and other front-end technologies.
        <br />
        <br /> I enjoy tackling challenging problems and finding innovative
        solutions that enhance website functionality and user engagement. I'm
        always seeking to expand my skill set and keep up with the latest design
        trends and best practices.
        <br />
        <br />
        When I'm not coding, you can find me exploring new technologies, playing
        video games, or enjoying a good cup of tea. Thanks for stopping by my
        portfolio, and feel free to contact me for any project inquiries or just
        to say hi!
      </motion.p>
    </motion.div>
  );
};

export default About;
