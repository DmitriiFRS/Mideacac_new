import Image from "next/image";
import Frame3Video from "./Frame3Video";
import Frame3Typography from "./Frame3Typography";
import bg from "../../public/img/Frame3bg.jpg";

function Frame3() {
  return (
    <section className="frame3 relative h-screen z-10">
      <video
        className="frame3__videobg fixed left-0 top-0 bg-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source src="/video/frame3bg.mp4" type="video/mp4" />
      </video>
      <div className="frame3__container container h-full flex">
        <div className="frame3__content flex justify-between relative z-10 items">
          <Frame3Video />
          <Frame3Typography />
        </div>
      </div>
    </section>
  );
}
export default Frame3;
