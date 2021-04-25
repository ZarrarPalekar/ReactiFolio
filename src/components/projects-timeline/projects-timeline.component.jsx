import React from "react";

import { Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./projects-timeline.styles.css";

import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { myProjects } from "../../data/myProjects";

const TimeLine = () => {
  // const history = useHistory();
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
              <Button
                className="mt-2 mr-2"
                target="_blank"
                variant="success"
                href={project.appUrl}
              >
                View Website
              </Button>
              <Button
                className="mt-2"
                target="_blank"
                variant="warning"
                href={project.gitUrl}
              >
                Source Code
              </Button>
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
