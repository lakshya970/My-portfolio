import React, { useState } from "react";
import { motion } from "framer-motion";
import Animated from "./Animated";
import { variants } from "../constants";

const ContactMe = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const animate = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    await fetch(
      "https://portfolio-836d1-default-rtdb.firebaseio.com/form.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formInput),
      }
    );
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact me" className="paddingX paddingY space-y-10">
      <motion.h1
        variants={variants.list}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex text-4xl md:text-5xl font-semibold"
      >
        {Array.from("Contact Me").map((value, i) => (
          <motion.span variants={variants.text} key={i}>
            <Animated text={value} />
          </motion.span>
        ))}
      </motion.h1>

      <motion.form
        className="flex flex-col space-y-5 max-w-screen-md"
        onSubmit={handleSubmit}
      >
        <motion.input
          {...animate}
          required
          className="py-3 px-4 bg-transparent border-b-2 outline-none"
          type="text"
          value={formInput.name}
          name={"name"}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          placeholder="Your name"
        />
        <motion.input
          {...animate}
          required
          className="py-3 px-4 bg-transparent border-b-2 outline-none"
          type="email"
          name="email"
          value={formInput.email}
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
          placeholder="Email"
        />
        <motion.textarea
          {...animate}
          required
          placeholder="Message"
          className="outline-none bg-transparent border-2 p-4"
          name="message"
          onChange={(e) =>
            setFormInput({ ...formInput, message: e.target.value })
          }
          value={formInput.message}
          cols="30"
          rows="10"
        ></motion.textarea>
        <motion.button
          {...animate}
          className="bg-white text-black py-2 uppercase font-semibold tracking-wider"
          type="submit"
        >
          send
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactMe;
