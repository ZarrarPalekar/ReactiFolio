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

export function diff_months(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  return Math.abs(Math.round(diff));
}

// dt1 = new Date("Mar 2017");
// dt2 = new Date("Apr 2019");
// console.log(diff_months(dt1, dt2));

export function getWords(monthCount) {
  function getPlural(number, word) {
    return (number === 1 && word.one) || word.other;
  }

  var months = { one: "month", other: "months" },
    years = { one: "year", other: "years" },
    m = monthCount % 12,
    y = Math.floor(monthCount / 12),
    result = [];

  y && result.push(y + " " + getPlural(y, years));
  m && result.push(m + " " + getPlural(m, months));
  return result.join(" and ");
}

// console.log(getWords(27));

const Experience = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {myExperience.map((exp) => {
        return width > 768 ? (
          <Jumbotron className="jumbo-style" key={Math.random()}>
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
                        <br />
                        <div className="ml-0">
                          <div>
                            <strong>Technology:</strong> {exp.technology}
                          </div>
                          <div>
                            <strong>Period:</strong> {exp.duration}
                          </div>
                          <div>
                            {getWords(
                              diff_months(
                                new Date(exp.duration.split(" - ")[0]),
                                new Date(Date.now())
                              )
                            ) !== "" && (
                              <>
                                <strong>Duration:</strong>{" "}
                                {exp.duration.includes("Till Now")
                                  ? getWords(
                                      diff_months(
                                        new Date(exp.duration.split(" - ")[0]),
                                        new Date(Date.now())
                                      )
                                    )
                                  : getWords(
                                      diff_months(
                                        new Date(exp.duration.split(" - ")[0]),
                                        new Date(exp.duration.split(" - ")[1])
                                      )
                                    )}{" "}
                              </>
                            )}
                          </div>
                          <br />
                          <div>
                            <strong>Description: </strong>
                          </div>
                        </div>

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
              key={Math.random()}
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
                  alt={exp.image}
                />
              </a>
              <h3 className="vertical-timeline-element-title mt-3">
                {exp.profile}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                {exp.subProfile}
              </h4>
              <h6 className="vertical-timeline-element-subtitle mt-3 ml-1">
                {exp.duration.includes("Till Now")
                  ? getWords(
                      diff_months(
                        new Date(exp.duration.split(" - ")[0]),
                        new Date(Date.now())
                      )
                    )
                  : getWords(
                      diff_months(
                        new Date(exp.duration.split(" - ")[0]),
                        new Date(exp.duration.split(" - ")[1])
                      )
                    )}
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      })}
    </div>
  );
};

export default Experience;
