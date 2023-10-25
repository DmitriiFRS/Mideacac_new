import Image from "next/image";
import "./Main.scss";
import bg from "../../public/img/mainframebg.jpg";
import "../globals.css";
import mainvideo from "../../public/video/mainvideo.png";
import MainframeTitle from "./MainframeTitle";

function Mainframe() {
  return (
    <section className="mainframe relative">
      <div className="container">
        <div className="mainframe__img absolute left-0 top-0 w-full h-full">
          <div className="main__imgBody relative w-full h-full">
            <Image src={bg} alt="" fill={true} priority={true} quality={100} />
          </div>
        </div>
        <div className="mainframe__content z-10 relative flex flex-col items-center">
          <div className="mainframe__titleBody inline-flex">
            <h1 className="mainframe__title uppercase">MIDEA|CAC</h1>
          </div>
          <video
            autoPlay
            loop
            muted
            className="mainframe__video w-screen h-screen"
          >
            <source src="/video/mainvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mainframe__subtitleContainer relative z-10 flex justify-end">
          <MainframeTitle />
        </div>
      </div>
    </section>
  );
}
export default Mainframe;
