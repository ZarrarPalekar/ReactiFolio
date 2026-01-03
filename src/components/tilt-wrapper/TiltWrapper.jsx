import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltWrapper = ({ children, options = {} }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, options);
    }

    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return <div ref={tiltRef}>{children}</div>;
};

export default TiltWrapper;
