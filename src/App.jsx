import { useRef, useState } from "react";
import Animated from "./components/Animated";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white font-unbounded">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
