import Image from "next/image";
import bg from "../../public/img/frame3bg.jpg";

function Frame3() {
  return (
    <section className="frame3 relative h-screen z-10">
      <div className="container h-full flex items-center justify-center">
        <div className="frame3__img absolute left-0 top-0 w-full h-full">
          <div className="main__imgBody relative w-full h-full">
            <Image src={bg} alt="" fill={true} priority={true} quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Frame3;
