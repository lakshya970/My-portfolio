import React, { useEffect, useRef } from "react";

const AnimateElement = ({ children, animationName }) => {
  const animation = ["animate__animated", animationName];
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
    <div ref={ref} onMouseOver={handleHover}>
      {children}
    </div>
  );
};

export default AnimateElement;
