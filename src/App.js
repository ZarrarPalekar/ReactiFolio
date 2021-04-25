import React from "react";
import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import "./App.css";
import MyCarousel from "./components/my-carousel/my-carousel.component";
//Components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import BgImage from "./assets/img/parallex/background.webp";
// import useWindowDimensions from "./functionality/checkViewPort";
// import BgImageSmall from "./assets/img/parallex/background_reverse.webp";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";

const App = () => {
  // const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <MyNavbar />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}
      <MyCarousel />
      <TitleMessage />
      <div>
        {/* <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpouch - www.freepik.com</a> */}

        <Parallax
          className="my-parallax"
          blur={{ min: -20, max: 20 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>

        {/* {width > 600 ? (
          <Parallax
            className="my-parallax"
            blur={{ min: -20, max: 20 }}
            bgImage={BgImage}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade left>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        ) : (
          <Parallax
            className="my-parallax"
            blur={{ min: -30, max: 30 }}
            bgImage={BgImage}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade left>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        )} */}
      </div>
      <Container className="container-box rounded">
        <Fade right duration={500}>
          <hr />
          <Skills />
        </Fade>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade left duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Fade right duration={500}>
          <hr />
          <TimeLine />
        </Fade>
      </Container>
      <Container className="container-box rounded">
        <Fade left duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
