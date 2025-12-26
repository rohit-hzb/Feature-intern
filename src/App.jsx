import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects/>
   
      <Contact />
      <Footer />
    </>
  );
}

export default App;
