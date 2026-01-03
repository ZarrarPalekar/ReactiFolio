import { useState } from "react";
import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./App.css";
import MyCarousel from "./components/my-carousel/my-carousel.component";
//Components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import BgImage from "./assets/img/parallex/background.webp";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import ProjectsTimeline from "./components/projects-timeline/ProjectsTimeline";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Whatsapp from "./components/whatsapp-me/whatsapp.component";

// Animated Section Component
const AnimatedSection = ({ children, direction = "up" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [isLoading, setLoading] = useState(true);

  const loaderStop = () => {
    const loaderElement = document.querySelector(".overlay");
    if (loaderElement) {
      loaderElement.remove();
      setLoading(false);
    }
  };

  if (isLoading) {
    return <MyCarousel loaderStop={loaderStop} hideAll={true} />;
  }

  return (
    <div className="App">
      <Whatsapp />
      <MyNavbar />
      <div className="hero-wrapper">
        <MyCarousel />
        <TitleMessage />
      </div>

      <div>
        <Parallax
          className="my-parallax"
          blur={{ min: -20, max: 20 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <AnimatedSection direction="left">
                <About />
              </AnimatedSection>
            </Container>
          </div>
        </Parallax>
      </div>

      <Container className="container-box rounded">
        <AnimatedSection direction="right">
          <hr />
          <Skills />
        </AnimatedSection>
      </Container>

      <div>
        <Container className="container-box rounded">
          <AnimatedSection direction="up">
            <hr />
            <Experience />
          </AnimatedSection>
        </Container>
      </div>

      <Container className="container-box rounded">
        <AnimatedSection direction="up">
          <hr />
          <ProjectsTimeline />
        </AnimatedSection>
      </Container>

      <Container className="container-box rounded">
        <AnimatedSection direction="left">
          <hr />
          <ContactForm />
        </AnimatedSection>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
