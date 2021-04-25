import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
  VerticalTimelineProps,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./projects-timeline.styles.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { myProjects } from "../../data/myProjects";

const TimeLine = () => {
  return (
    <div id="projects">
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
        {myProjects.map((project) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
              date={project.date}
            >
              <h3 className="vertical-timeline-element-title">
                {project.projectName}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {project.techUsed}
              </h4>
              <p>
                <strong>Application Website: </strong>
                <a href={project.appUrl}>{project.appUrl}</a>
              </p>
              <p>
                <strong>Source Code: </strong>
                <a href={project.gitUrl}>{project.gitUrl}</a>
              </p>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
