import React, { useEffect, useRef, useState } from "react";

const Animated = ({ text }) => {
  const animation = ["animate__animated", "animate__rubberBand"];
  const ref = useRef(null);
  const handleHover = () => {
    ref.current.classList.add(...animation);
  };

  useEffect(() => {
    ref.current.addEventListener("animationend", () => {
      ref.current.classList.remove(...animation);
    });
    return ref.current.removeEventListener("animationend", () => {
      ref.current.classList.remove(...animation);
    });
  }, []);

  return (
    <div ref={ref} className="" onMouseOver={handleHover}>
      {text}
    </div>
  );
};

export default Animated;
