function MainframeVideo() {
  return (
    <video autoPlay loop muted className="mainframe__video w-screen h-screen">
      <source src="/video/mainvideo.mp4" type="video/mp4" />
    </video>
  );
}
export default MainframeVideo;
