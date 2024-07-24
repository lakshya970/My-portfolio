import neopixel from "../assets/neopixel.png";
import moviesflix from "../assets/moviesflix.png";
import neoweather from "../assets/neoweather.png";
import nextmovies from "../assets/nextmovies.png";
import youtube from "../assets/youtube.png";

//images
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import next from "../assets/next.svg";
import sass from "../assets/sass.svg";

export const links = [
  {
    id: 1,
    text: "home",
  },
  {
    id: 2,
    text: "about me",
  },
  {
    id: 3,
    text: "portfolio",
  },
  {
    id: 4,
    text: "skills",
  },
  {
    id: 5,
    text: "contact me",
  },
];

export const parent = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.075,
    },
  },
  hidden: {
    opacity: 0,
  },
};
export const children = {
  visible: {
    // rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 17,
      stiffness: 700,
    },
  },
  hidden: {
    // rotate: 180,
    scale: 0,
    opacity: 0,
  },
};

export const variants = {
  list: {
    visible: {
      // opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.075,
      },
    },
    hidden: {
      // opacity: 0,
    },
  },
  item: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
  text: {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 17,
        stiffness: 700,
      },
    },
  },
};

export const projects = [
  {
    id: 1,
    title: "next movies",
    description: "",
    url: "https://next-movies-three.vercel.app/",
    img: nextmovies,
  },
  {
    id: 2,
    title: "neo pixel",
    description: "",
    url: "https://neopixel.vercel.app/",
    img: neopixel,
  },
  {
    id: 3,
    title: "neo weather",
    description: "",
    url: "https://neo-weather.vercel.app/",
    img: neoweather,
  },
  {
    id: 4,
    title: "moviesflix",
    description: "",
    url: "https://movies-flix-three.vercel.app/",
    img: moviesflix,
  },
  {
    id: 5,
    title: "youtube ui clone",
    description: "",
    url: "https://youtube-ui-sigma.vercel.app/",
    img: youtube,
  },
];

export const frontendSkills = [
  {
    text: "HTML",
    image: html,
  },
  {
    text: "CSS",
    image: css,
  },
  {
    text: "JavaScript",
    image: javascript,
  },
  {
    text: "TypeScript",
    image: typescript,
  },
  {
    text: "SASS",
    image: sass,
  },
  {
    text: "Tailwind CSS",
    image: tailwind,
  },
  {
    text: "React.Js",
    image: react,
  },
  {
    text: "Next.Js",
    image: next,
  },
];
export const otherSkills = [
  {
    text: "Git",
    image: github,
  },
];
