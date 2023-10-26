import Image from "next/image";
import bg3 from "../../public/img/frame3bg.jpg";
import Frame3Video from "./Frame3Video";
import Frame3Typography from "./Frame3Typography";

function Frame3() {
  return (
    <section className="frame3 relative h-screen z-10">
      <div className="frame3__container container h-full flex">
        <div className="frame3__img absolute left-0 top-0 w-full h-full">
          <div className="main__imgBody relative w-full h-full">
            <Image src={bg3} alt="" fill={true} priority={true} quality={100} />
          </div>
        </div>
        <div className="frame3__content flex justify-between relative z-10 items">
          <Frame3Video />
          <Frame3Typography />
        </div>
      </div>
    </section>
  );
}
export default Frame3;
