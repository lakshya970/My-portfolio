import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const socials = [
    {
      icon: <AiFillGithub size={20} />,
      url: "https://github.com/lakshya970",
    },
    {
      icon: <MdAlternateEmail size={20} />,
      url: "mailto:llakshya019@gmail.com",
    },
    {
      icon: <AiOutlineInstagram size={20} />,
      url: "https://www.instagram.com/lakshya_x/",
    },
    {
      icon: <AiFillLinkedin size={20} />,
      url: "https://www.linkedin.com/in/lakshya-mahawar-275354296/",
    },
  ];
  return (
    <footer className="flex justify-between items-center paddingX py-6">
      <h3 className="font-bold text-2xl">lm.</h3>
      <div className="flex gap-2">
        {socials.map((value, i) => (
          <a
            className="text-stone-400 hover:text-stone-200 duration-150 ease-in"
            href={value.url}
            target="_blank"
            key={i}
          >
            {value.icon}
          </a>
        ))}
        {/* <a
          className="text-stone-400 hover:text-stone-200 duration-150 ease-in"
          href="https://github.com/nitish7426"
          target="_blank"
        >
          <AiFillGithub size={20} />
        </a>
        <a
          className="text-stone-400 hover:text-stone-200 duration-150 ease-in"
          href="mailto:nitishmahawar112@gmail.com"
          target="_blank"
        >
          <MdAlternateEmail size={20} />
        </a>
        <a
          className="text-stone-400 hover:text-stone-200 duration-150 ease-in"
          href="https://github.com/nitish7426"
          target="_blank"
        >
          <AiOutlineInstagram size={20} />
        </a>
        <a
          className="text-stone-400 hover:text-stone-200 duration-150 ease-in"
          href="https://github.com/nitish7426"
          target="_blank"
        >
          <AiFillLinkedin size={20} />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
