"use client";

import Image from "next/image";
import line from "../../public/img/line.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const titles = [
  [
    "Минимальный шум: благодаря электромагнитной технологии",
    "снижается уровень шума. Работа оборудования становится",
    "комфортной и приемлемой для окружающей среды.",
  ],
  [
    "Долговечность: Инновационные технологии и отсутствие",
    "трения увеличивают срок службы оборудования",
    "и сокращают затраты на обслуживание и ремонт.",
  ],
  [
    "Компактность: Усовершенствованная конструкция",
    "чиллеров и теплообменника обеспечивает их",
    "удобное и компактное размещение.",
  ],
  [
    "Эффективность: Высокая энергоэффективность снижает",
    "потребление энергии, позволяя экономить средства.",
  ],
];

function Frame2Titles() {
  const [isView, setIsView] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    setIsView(inView);
  }, [inView]);
  return (
    <ul ref={ref} className="frame2__list relative z-10">
      {titles.map((el, index) => {
        return (
          <li
            style={{ transitionDelay: isView ? `${index / 3}s` : "0s" }}
            key={index}
            className={`frame2__item ${
              isView ? "frame2__item__active" : ""
            } flex flex-col`}
          >
            <p className="frame2__title">{el[0]}</p>
            <p className="frame2__title">{el[1]}</p>
            {el.length === 3 ? <p className="frame2__title">{el[2]}</p> : ""}
            {index !== 3 ? (
              <div className="frame2__divider relative"></div>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default Frame2Titles;
