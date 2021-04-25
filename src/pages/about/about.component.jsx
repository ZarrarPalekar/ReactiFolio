import React from "react";
import { Button, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfilePic from "../../assets/img/profile/profile.webp";
import "./about.style.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  src={ProfilePic}
                  alt="Zarrar Profile Pic"
                  thumbnail
                  fluid
                  spin
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="custom-bold8 align-items-start p-2 my-details rounded">
                <p>
                  Hi there! I am{" "}
                  <strong className="boldest">ZARRAR PALEKAR</strong>
                </p>
                <p>
                  A passionate developer, born and brought up in Mumbai, IN. I
                  am a Full Stack Web Developer with React.js, Redux,
                  Express.js, Node.js, and MongoDB as my tech stack.
                </p>
                <p>
                  I am Post Graduate Diploma Holder from{" "}
                  <strong className="boldest">CDAC</strong> Institute
                </p>
                <p>
                  Working with the stakeholders, I always strive to understand
                  the requirements completely and also give my suggestions as an
                  add-on to what could lead to a better end result and work
                  according to what comes as the final approval sign-off from
                  the stakeholders.
                </p>
                <p>
                  Along with that, I also help my junior colleagues as a{" "}
                  <strong className="boldest">MENTOR</strong> in their day to
                  day development tasks/issues. I love learning about new
                  technologies, what problems are they solving and How can I use
                  them to build better and scalable products.
                </p>
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-info">
                        <i class="far fa-envelope" />
                        &nbsp;Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1rg-iW9Sj1OdhWXSt8weAf6Z_rA-LTNty/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        <i class="far fa-file"></i>&nbsp;My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ZarrarPalekar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        <i class="fab fa-github"></i>&nbsp;GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/zarrarpalekar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        <i class="fab fa-linkedin-in"></i>&nbsp;LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
