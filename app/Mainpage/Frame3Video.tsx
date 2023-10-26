function Frame3Video() {
  return (
    <video className="frame3__video" muted autoPlay loop>
      <source
        className="h-full w-full"
        src="/video/mainvideo.mp4"
        type="video/mp4"
      />
    </video>
  );
}
export default Frame3Video;
