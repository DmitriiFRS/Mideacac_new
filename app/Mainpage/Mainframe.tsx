import Image from "next/image";
import "./Main.scss";
import bg from "../../public/img/mainframebg.jpg";
import "../globals.css";
import mainvideo from "../../public/video/mainvideo.png";

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
          <picture className="mainframe__video relative w-full h-full">
            <Image src={mainvideo} alt="video" fill={true} />
          </picture>
        </div>
        <div className="mainframe__subtitleContainer relative z-10 flex justify-end">
          <div className="mainframe__subtitleBody">
            <h2 className="mainframe__subtitle text-end">
              Midea MagBoost - это прорыв в системах охлаждения, который
              навсегда изменит ваши представления о надежностии эффективности
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mainframe;
