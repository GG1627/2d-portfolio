import { useRef } from "react";
import { Clouds } from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};
