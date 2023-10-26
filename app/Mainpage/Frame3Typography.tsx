"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const list = [
  "Большая стабильность",
  "Высокая точность",
  "Меньше износа",
  "Меньше трения",
];

function Frame3Typography() {
  const [listInView, setIsView] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    setIsView(inView);
  }, [inView]);
  return (
    <div className="frame3__titleBlock flex flex-col">
      <div className="frame3__titles">
        <h2 className="frame3__title">
          МАГНИТНЫЙ ПОДШИПНИК C ПРОСТРАНСТВЕННО-ВЕКТОРНЫМ УПРАВЛЕНИЕМ
        </h2>
      </div>
      <ul ref={ref} className="frame3__list">
        {list.map((el, index) => {
          return (
            <li
              style={{ transitionDelay: `${index / 5}s` }}
              className={`frame3__item ${inView ? "frame3__item__active" : ""}`}
              key={index}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Frame3Typography;
