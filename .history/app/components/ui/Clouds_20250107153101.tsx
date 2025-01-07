import React, { useEffect, useState } from "react";
import Cloud1 from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";
import Cloud3 from "../../assets/cloud3.png";
import Cloud4 from "../../assets/cloud4.png";
import Cloud5 from "../../assets/cloud5.png";
import Image from "next/image";
import { Circles } from "./Circles";

const ParallaxClouds = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cloudsPosition, setCloudsPosition] = useState({
    cloud1: { x: 0, y: 0 },
    cloud2: { x: 0, y: 0 },
    cloud3: { x: 0, y: 0 },
    cloud4: { x: 0, y: 0 },
    cloud5: { x: 0, y: 0 },
  });

  // Track mouse position
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Calculate cloud positions based on mouse position
  useEffect(() => {
    const updateCloudPositions = () => {
      setCloudsPosition({
        cloud1: {
          x: (mousePosition.x - window.innerWidth / 2) * 0.05,
          y: (mousePosition.y - window.innerHeight / 2) * 0.05,
        },
        cloud2: {
          x: (mousePosition.x - window.innerWidth / 2) * 0.1,
          y: (mousePosition.y - window.innerHeight / 2) * 0.1,
        },
        cloud3: {
          x: (mousePosition.x - window.innerWidth / 2) * 0.15,
          y: (mousePosition.y - window.innerHeight / 2) * 0.15,
        },
        cloud4: {
          x: (mousePosition.x - window.innerWidth / 2) * 0.2,
          y: (mousePosition.y - window.innerHeight / 2) * 0.2,
        },
        cloud5: {
          x: (mousePosition.x - window.innerWidth / 2) * 0.25,
          y: (mousePosition.y - window.innerHeight / 2) * 0.25,
        },
      });
    };

    updateCloudPositions();
  }, [mousePosition]); // Update whenever the mouse position changes

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-[-45%] left-[50%] w-[78rem] -translate-x-1/2 aspect-square">
      <Circles />
      <Image
        src={Cloud1}
        alt="cloud 1"
        className="absolute"
        style={{
          left: `calc(-4% + ${cloudsPosition.cloud1.x}px)`,
          top: `calc(30% + ${cloudsPosition.cloud1.y}px)`,
          width: "250px", // Make the cloud smaller
          transition: "transform 0.1s ease-out",
        }}
      />
      <Image
        src={Cloud2}
        alt="cloud 2"
        className="absolute"
        style={{
          left: `calc(85% + ${cloudsPosition.cloud2.x}px)`,
          top: `calc(30% + ${cloudsPosition.cloud2.y}px)`,
          width: "250px", // Make the cloud smaller
          transition: "transform 0.1s ease-out",
        }}
      />
      <Image
        src={Cloud3}
        alt="cloud 3"
        className="absolute"
        style={{
          left: `calc(10% + ${cloudsPosition.cloud3.x}px)`,
          top: `calc(30% + ${cloudsPosition.cloud3.y}px)`,
          width: "300px", // Make the cloud smaller
          transition: "transform 0.1s ease-out",
        }}
      />
      <Image
        src={Cloud4}
        alt="cloud 4"
        className="absolute"
        style={{
          left: `calc(50% + ${cloudsPosition.cloud4.x}px)`,
          top: `calc(30% + ${cloudsPosition.cloud4.y}px)`,
          width: "300px", // Make the cloud smaller
          transition: "transform 0.1s ease-out",
        }}
      />
      <Image
        src={Cloud5}
        alt="cloud 5"
        className="absolute"
        style={{
          left: `calc(50% + ${cloudsPosition.cloud5.x}px)`,
          top: `calc(30% + ${cloudsPosition.cloud5.y}px)`,
          width: "300px", // Make the cloud smaller

          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default ParallaxClouds;
