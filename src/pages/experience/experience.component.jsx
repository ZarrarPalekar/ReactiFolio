import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";
import { myExperience } from "../../data/myExperience";
import useWindowDimensions from "../../functionality/checkViewPort";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {myExperience.map((exp) => {
        return width > 768 ? (
          <Jumbotron className="jumbo-style">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>
                  <Card.Header
                    as="h5"
                    className="d-flex justify-content-center flex-wrap"
                  >
                    <a
                      href={exp.companyURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        className="img-resize"
                        src={
                          require(`../../assets/img/experience/${exp.image}`)
                            .default
                        }
                        alt="TI logo"
                      />
                    </a>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center">
                        {exp.profile}
                      </Card.Title>
                    </div>
                    <div>
                      <Card.Text className="text-center style">
                        <strong className="body-title-style ">
                          {exp.subProfile}
                        </strong>
                        <br />
                        <strong>Technology:</strong> {exp.technology}
                        <br />
                        <strong>Duration:</strong> {exp.duration}
                        <br />
                        <strong> Description </strong>
                        <ul className="text-left">
                          {exp.description.desc1 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc1,
                              }}
                            ></li>
                          )}
                          {exp.description.desc2 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc2,
                              }}
                            ></li>
                          )}
                          {exp.description.desc3 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc3,
                              }}
                            ></li>
                          )}
                          {exp.description.desc4 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc4,
                              }}
                            ></li>
                          )}
                          {exp.description.desc5 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc5,
                              }}
                            ></li>
                          )}
                        </ul>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </Container>
          </Jumbotron>
        ) : (
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
              date={exp.duration}
              dateClassName="mr-2 ml-1 font-weight-bold"
            >
              <a
                href={exp.companyURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={
                    require(`../../assets/img/experience/${exp.image}`).default
                  }
                  alt="TI logo"
                />
              </a>
              <h3 className="vertical-timeline-element-title mt-3">
                {exp.profile}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                {exp.subProfile}
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      })}
    </div>
  );
};

export default Experience;
