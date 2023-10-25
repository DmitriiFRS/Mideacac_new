import Image from "next/image";
import "./Main.scss";
import bg from "../../public/img/mainframebg.jpg";
import "../globals.css";
import MainframeTitle from "./MainframeTitle";
import MainframeVideo from "./MainframeVideo";

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
          <MainframeVideo />
        </div>
        <div className="mainframe__subtitleContainer relative z-10 flex justify-end">
          <MainframeTitle />
        </div>
      </div>
    </section>
  );
}
export default Mainframe;
