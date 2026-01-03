import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { myProjects } from "../../data/myProjects";
import "./projects-timeline.styles.css";

const ProjectsTimeline = () => {
  const ProjectCard = ({ project, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const techArray = project.techUsed.split(",").map((tech) => tech.trim());
    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={
          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
        }
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`timeline-item ${
          isEven ? "timeline-item-left" : "timeline-item-right"
        }`}
      >
        <div className="timeline-content">
          <div className="timeline-date">{project.date}</div>

          <div className="project-card">
            <div className="project-image-container">
              <img
                src={require(`../../assets/img/projects/${project.projectImg}`)}
                alt={project.projectName}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.projectName}</h3>
              <p className="project-description">{project.desc}</p>

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Project Details</Accordion.Header>
                  <Accordion.Body>
                    <div className="project-details">
                      <h5>Features:</h5>
                      <ul className="features-list">
                        {Object.values(project.features).map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <hr />

                      <h5>Technologies Used:</h5>
                      <div className="tech-stack">
                        {techArray.map((tech, idx) => {
                          const techImage = project.techImages?.[`img${idx}`];
                          return (
                            <div key={idx} className="tech-item">
                              {techImage && (
                                <Image
                                  src={require(`../../assets/img/skills/${techImage}`)}
                                  alt={tech}
                                  className="tech-icon"
                                />
                              )}
                              <span>{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="project-actions mt-3">
                {project.appUrl && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(project.appUrl, "_blank")}
                    className="me-2"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    View Live
                  </Button>
                )}
                {project.gitUrl && (
                  <Button
                    variant="outline-secondary"
                    onClick={() => window.open(project.gitUrl, "_blank")}
                  >
                    <i className="fab fa-github me-2"></i>
                    Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="projects" className="projects-section">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="pt-3 text-center font-details-b pb-3"
      >
        PROJECTS
      </motion.h1>

      <Container>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectsTimeline;
