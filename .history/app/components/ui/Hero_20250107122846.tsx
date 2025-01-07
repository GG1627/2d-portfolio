import { useRef } from "react";
import { Clouds } from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef();

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};
