import Image from "next/image";
import bg from "../../public/img/frame2bg.jpg";
import Frame2Titles from "./Frame2Titles";
import Frame2VideoLeft from "./Frame2VideoLeft";
import Frame2VideoRight from "./Frame2VideoRight";

const titles = [
  "Минимальный шум: благодаря электромагнитной технологии снижается уровень шума. Работа оборудования комфортной и приемлемой для окружающей среды.",
  "Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.",
  "Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.",
  "Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.",
];

function Frame2() {
  return (
    <section className="frame2 relative h-screen z-20 overflow-hidden">
      <div className="container h-full flex items-center justify-center">
        <div className="mainframe__img absolute left-0 top-0 w-full h-full">
          <div className="main__imgBody relative w-full h-full">
            <Image src={bg} alt="" fill={true} priority={true} quality={100} />
          </div>
        </div>
        <Frame2Titles />
      </div>
      <div className="frame2__videoContainer absolute z-10">
        <Frame2VideoRight />
      </div>
      <div className="frame2__videoContainer2 absolute z-10">
        <Frame2VideoLeft />
      </div>
      <div className="frame2__shadowLeft"></div>
    </section>
  );
}
export default Frame2;
