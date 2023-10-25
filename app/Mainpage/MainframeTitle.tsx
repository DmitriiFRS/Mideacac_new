"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTypewriter } from "react-simple-typewriter";

function MainframeTitle() {
  const [text] = useTypewriter({
    words: [
      "Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши представления о надежности и эффективности",
    ],
    typeSpeed: 20,
  });
  const [titleInView, setInView] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });
  useEffect(() => {
    setInView(inView);
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`mainframe__subtitleBody ${
        inView ? "mainframe__subtitle_active" : ""
      }`}
    >
      <h2 className="mainframe__subtitle">{text}</h2>
    </div>
  );
}
export default MainframeTitle;
