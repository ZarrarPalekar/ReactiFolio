import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./projects-timeline.styles.css";

import { myProjects } from "../../data/myProjects";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {myProjects.map((project) => {
            return (
              <ImageEvent
                date={project.date}
                className="focus text-center"
                text={project.projectName}
                src={
                  require(`../../assets/img/projects/${project.projectImg}`)
                    .default
                }
                alt={project.projectName}
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> {project.desc}
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              {project.features.feat1 && (
                                <li>{project.features.feat1}</li>
                              )}
                              {project.features.feat2 && (
                                <li>{project.features.feat2}</li>
                              )}
                              {project.features.feat3 && (
                                <li>{project.features.feat3}</li>
                              )}
                              {project.features.feat4 && (
                                <li>{project.features.feat4}</li>
                              )}
                              {project.features.feat5 && (
                                <li>{project.features.feat5}</li>
                              )}
                              {project.features.feat6 && (
                                <li>{project.features.feat6}</li>
                              )}
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                              {project.techUsed
                                .trim()
                                .split(",")
                                .map((eachTech, index) => {
                                  console.log(eachTech.trim().valueOf());
                                  return (
                                    <li className="py-2">
                                      <span className="p-2">
                                        {index === 0 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img0}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {index === 1 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img1}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {index === 2 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img2}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {index === 3 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img3}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {index === 4 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img4}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {index === 5 &&
                                          project.techImages && (
                                            <Image
                                              // src={`${eachTech.trim()}`}
                                              src={
                                                require(`../../assets/img/skills/${project.techImages.img5}`)
                                                  .default
                                              }
                                              alt={eachTech}
                                              rounded
                                              className="image-style m-1"
                                            ></Image>
                                          )}{" "}
                                        {eachTech}
                                      </span>
                                    </li>
                                  );
                                })}
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    {project.appUrl && (
                      <UrlButton href={project.appUrl} target="_blank">
                        SEE LIVE
                      </UrlButton>
                    )}

                    {project.gitUrl && (
                      <UrlButton href={project.gitUrl} target="_blank">
                        SOURCE CODE
                      </UrlButton>
                    )}
                  </div>
                </div>
              </ImageEvent>
            );
          })}
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
