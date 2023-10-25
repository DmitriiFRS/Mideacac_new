import Image from "next/image";
import bg from "../../public/img/frame2bg.jpg";
import line from "../../public/img/line.png";

const titles = [
  "Минимальный шум: благодаря электромагнитной технологии снижается уровень шума. Работа оборудования комфортной и приемлемой для окружающей среды.",
  "Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.",
  "Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.",
  "Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.",
];

function Frame2() {
  return (
    <section className="frame2 relative">
      <div className="container h-full flex items-center justify-center">
        <div className="mainframe__img absolute left-0 top-0 w-full h-full">
          <div className="main__imgBody relative w-full h-full">
            <Image src={bg} alt="" fill={true} priority={true} quality={100} />
          </div>
        </div>
        <ul className="frame2__list relative z-10">
          {titles.map((el, index) => {
            return (
              <li
                key={index}
                className="frame2__item flex flex-col items-center"
              >
                <p className="frame2__title">{el}</p>
                {index !== 3 ? (
                  <Image
                    className="frame2__img"
                    src={line}
                    alt="line"
                    width={417}
                    height={35}
                  />
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="frame2__videoContainer absolute right-0 top-0 z-10">
        <video
          className="frame2__sideVideo absolute z-10 h-full"
          autoPlay
          muted
          loop
        >
          <source src="/video/frame2Sidevideo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
export default Frame2;
