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

  @media (max-width: 768px) {
    bottom: 2rem;
  }

  @media (max-width: 480px) {
    bottom: 1.5rem;
    gap: 0.3rem;
  }
`;

const ScrollText = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
  }
`;

const ScrollIcon = styled(motion.a)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

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

  @media (max-width: 480px) {
    width: 28px;
    height: 55px;
    border-radius: 20px;
    padding-top: 7px;

    .wheel {
      width: 4px;
      height: 7px;
    }
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <ScrollText>SCROLL</ScrollText>
      <ScrollIcon
        href="#about"
        animate={{
          y: [0, 8, 0],
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
            y: [0, 6, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ScrollIcon>
    </MyScroll>
  );
};

export default ScrollDown;
