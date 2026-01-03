import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./title-message.styles.css";

const MyTitleMessage = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  padding: 0 var(--space-4);
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="hero-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-greeting"
      >
        👋 Hi, I am
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hero-name"
      >
        <span className="gradient-text">Zarrar Palekar</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero-subtitle"
      >
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "MERN Stack Expert",
              "UI/UX Enthusiast",
              "Problem Solver",
              "Tech Innovator",
            ],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 50,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hero-description"
      >
        Crafting elegant web solutions with modern technologies
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hero-cta"
      >
        <a href="#about" className="cta-button primary">
          <span>Explore My Work</span>
          <i className="fas fa-arrow-down"></i>
        </a>
        <a href="#contact" className="cta-button secondary">
          <span>Get In Touch</span>
          <i className="fas fa-envelope"></i>
        </a>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="floating-element element-1"
      >
        <i className="fab fa-react"></i>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="floating-element element-2"
      >
        <i className="fab fa-node-js"></i>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="floating-element element-3"
      >
        <i className="fab fa-js"></i>
      </motion.div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
