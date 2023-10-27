"use client";

import { useEffect, useRef, useState } from "react";

function Frame2VideoLeft() {
  const [currentVideo, setVideo] = useState<string>("/video/frame2Left2.mp4");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function changeVideo() {
    if (currentVideo === "/video/frame2Left2.mp4") {
      setVideo("/video/frame2Left1.mp4");
    } else {
      setVideo("/video/frame2Left1.mp4?a=" + new Date().getTime());
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <video
      ref={videoRef}
      className="frame2__sideVideo2"
      autoPlay
      muted
      loop={currentVideo.includes("/video/frame2Left1.mp4")}
      onEnded={changeVideo}
    >
      <source
        className="frame2__sideVideo2__video"
        src={currentVideo}
        type="video/mp4"
      />
    </video>
  );
}

export default Frame2VideoLeft;
