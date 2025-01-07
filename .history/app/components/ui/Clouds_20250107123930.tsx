import React, { useEffect, useState, RefObject } from "react";
import { MouseParallax } from "react-just-parallax";
import { Circles } from "./Circles";
import Cloud1 from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";
import Cloud3 from "../../assets/cloud3.png";
import Cloud4 from "../../assets/cloud4.png";
import Cloud5 from "../../assets/cloud5.png";

interface BackgroundCloudsProps {
  parallaxRef: RefObject<HTMLDivElement>;
}

export const Clouds: React.FC<BackgroundCloudsProps> = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-[-45%] left-[50%] w-[78rem] -translate-x-1/2">
      <Circles />

      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-[17%] right-[50%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={Cloud1.src}
            alt="cloud 1"
            className={`w-64 ${
              mounted ? "translate-y-0 opacity-0" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
