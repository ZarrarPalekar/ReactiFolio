import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./skills.style.css";
import { skills } from "./skills-data";

const Skills = () => {
  const SkillCard = ({ title, skillsList, delay = 0 }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
      >
        <Card className="skill-card glass-card hover-lift">
          <Card.Body>
            <Card.Title className="skill-card-title">
              <span className="gradient-text">{title}</span>
            </Card.Title>
            <div className="skill-divider"></div>
            <Card.Text className="skill-list">
              {skillsList.map((skill, index) => (
                <motion.a
                  key={index}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-item"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-icon-wrapper">
                    <Image
                      src={skill.imgSrc}
                      alt={skill.imgAltText}
                      className="skill-icon"
                    />
                  </div>
                  <span className="skill-name">{skill.skillName}</span>
                  <i className="fas fa-arrow-right skill-arrow"></i>
                </motion.a>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="skills-section" id="skills">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center font-details-b pb-5"
      >
        TECH SKILLS
      </motion.h1>
      <Row className="g-4 d-flex justify-content-around">
        <Col md={4}>
          <SkillCard
            title="Frontend"
            skillsList={skills.frontend}
            delay={0.1}
          />
        </Col>

        <Col md={4}>
          <SkillCard title="Backend" skillsList={skills.backend} delay={0.2} />
          <SkillCard
            title="Hosting Platforms"
            skillsList={skills.hostingPlatforms}
            delay={0.3}
          />
        </Col>

        <Col md={4}>
          <SkillCard
            title="Programming Languages"
            skillsList={skills.programmingLanguages}
            delay={0.4}
          />
          <SkillCard
            title="Database"
            skillsList={skills.databases}
            delay={0.5}
          />
          <SkillCard
            title="Version Control"
            skillsList={skills.versionControl}
            delay={0.6}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
