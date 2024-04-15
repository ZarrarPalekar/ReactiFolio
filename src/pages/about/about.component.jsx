import React from "react";
import { Button, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfilePic from "../../assets/img/profile/profile.webp";
import {
  diff_months,
  getWordsWithoutMonths,
} from "../experience/experience.component";
import "./about.style.css";
import { PopupButton } from "react-calendly";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Tilt options={{ max: 100 }}>
                  <Image
                    className="profile justify-content-end"
                    src={ProfilePic}
                    alt="Zarrar Profile Pic"
                    thumbnail
                    fluid
                    spin="true"
                  />
                </Tilt>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Tilt options={{ max: 1 }}>
                <Row className="custom-bold8 align-items-start p-2 my-details rounded">
                  <p>
                    &#128075; Hi there! I am{" "}
                    <strong className="boldest">ZARRAR PALEKAR</strong>.
                  </p>
                  <p>
                    With over{" "}
                    <strong className="boldest">
                      {getWordsWithoutMonths(
                        diff_months(new Date("Aug 2017"), new Date(Date.now()))
                      )}{" "}
                    </strong>{" "}
                    of dedicated experience in Full Stack Web Development, my
                    passion lies in crafting elegant and intuitive web
                    applications that provide seamless user experiences.
                  </p>
                  <p>
                    I excel in utilizing the MERN stack (MongoDB, Express,
                    React, Node.js) and stay up-to-date with the latest
                    technologies and methodologies to deliver innovative,
                    tailor-made solutions that align with clients' specific
                    needs.
                  </p>
                  <p>
                    From ideation to deployment, I prioritize delivering
                    exceptional outcomes that surpass expectations. My attention
                    to detail ensures visually appealing and functionally robust
                    applications that drive business growth and enhance user
                    engagement.
                  </p>
                  <p>
                    Whether working independently or collaboratively, my
                    commitment to excellence remains steadfast. I continuously
                    expand my expertise to remain at the forefront of this
                    dynamic industry.
                  </p>
                  <p>
                    Let's collaborate to turn your vision to reality and create
                    something truly exceptional together!
                  </p>
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-info">
                          <i className="far fa-envelope" />
                          &nbsp;Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://drive.google.com/file/d/192b3fDbA7bUnrfS4YamCyBVy-qCHl3hI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-success">
                          <i className="far fa-file"></i>&nbsp;My Resume
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
                          <i className="fab fa-github"></i>&nbsp;GitHub
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
                          <i className="fab fa-linkedin-in"></i>&nbsp;LinkedIn
                        </Button>
                      </a>
                    </div>
                    <div title="Let's catchup over a Google Meet call">
                      <PopupButton
                        className="btn calendly-btn"
                        url="https://calendly.com/meetzarrar"
                        rootElement={document.getElementById("root")}
                        text={[
                          <i class="fa fa-calendar" aria-hidden="true"></i>,
                          " Connect via Calendly",
                        ]}
                      />
                    </div>
                  </Col>
                </Row>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
