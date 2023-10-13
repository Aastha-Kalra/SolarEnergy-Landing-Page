import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";
import Faq from "./Faq";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ScrollToTopButton from "./ScrollTotop";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";

function Elite() {
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
export default Elite;
