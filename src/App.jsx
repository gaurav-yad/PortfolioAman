import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Slide from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slide delay={0.4}>
        <Landing />
      </Slide>
      <Slide delay={0.5}>
        <About />
      </Slide>
      <Slide delay={0.5}>
        <Experience />
      </Slide>
      <Slide delay={0.5}>
        <Contact />
      </Slide>
      <Footer />
    </>
  );
}

export default App;
