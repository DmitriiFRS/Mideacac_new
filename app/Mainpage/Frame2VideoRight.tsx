function Frame2VideoRight() {
  return (
    <video className="frame2__sideVideo" autoPlay muted loop>
      <source
        className="frame2__sideVideo__video"
        src="/video/frame2Sidevideo.mp4"
        type="video/mp4"
      />
    </video>
  );
}
export default Frame2VideoRight;
