import React from "react";
import { Button, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfilePic from "../../assets/img/profile/profile.webp";
import {
  diff_months,
  getWords,
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
                  {/* <p>
                  A passionate developer, born and brought up in Mumbai, IN. I
                  am a Full Stack Web Developer with{" "}
                  <strong className="boldest">
                    {getWords(
                      diff_months(new Date("Aug 2017"), new Date(Date.now()))
                    )}{" "}
                  </strong>
                  of experience in React.js, Redux, Express.js, Node.js, MongoDB
                  as my current tech stack.
                </p> */}
                  <p>
                    With over{" "}
                    <strong className="boldest">
                      {getWordsWithoutMonths(
                        diff_months(new Date("Aug 2017"), new Date(Date.now()))
                      )}{" "}
                    </strong>{" "}
                    of extensive experience in Full Stack Web Development, I
                    have a true passion for building elegant and intuitive web
                    applications that provide a seamless user experience.
                  </p>
                  <p>
                    With a strong foundation in MongoDB, Express, React, and
                    Node.js, I am well-versed in the latest technologies and
                    techniques for delivering cutting-edge solutions that meet
                    the unique needs of clients.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    From concept to deployment, I am dedicated to delivering
                    exceptional results that exceed expectations.
                  </p>
                  <p>
                    With a keen eye for detail, I take pride in crafting
                    visually stunning and functionally robust applications that
                    drive business growth and user engagement.
                  </p>
                  <p>
                    Whether working independently or as part of a team, I am
                    committed to excellence, and I strive to continuously expand
                    my skills and knowledge to stay ahead of the curve in this
                    rapidly evolving industry.
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
