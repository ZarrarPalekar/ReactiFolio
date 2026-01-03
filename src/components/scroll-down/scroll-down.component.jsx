import { motion } from "framer-motion";
import styled from "styled-components";

const MyScroll = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ScrollText = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  }

  .wheel {
    width: 4px;
    height: 8px;
    background: white;
    border-radius: 2px;
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <ScrollText>Scroll</ScrollText>
      <a href="#about" style={{ textDecoration: "none" }}>
        <ScrollIcon
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="wheel"
            animate={{
              opacity: [1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </ScrollIcon>
      </a>
    </MyScroll>
  );
};

export default ScrollDown;
