// App.js
import React from "react";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollTotop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Projects />
      <Team />
      <Faq />
      <div className="2xl:w-[70%] m-auto w-[94%]">
        <Testimonials />
      </div>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
