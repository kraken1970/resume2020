import React from "react";
import { skills } from "data";
import s from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={s.skillsSection} >
      
      <div className="container">
      <div className={s.request}>
        <h3>Требования к будущей работе:</h3>
        <p>Должность:Разработчик React, Верстальщик HTML, React</p>
        <p>Зарплата (минимум): 1200 USD</p>
        <p>Режим работы: удаленно</p>
        <p>График работы: полный рабочий день</p>
      </div>

      <div className={s.skills}>
        <h3 className={s.skillsTitle}>Ключевые навыки:</h3>
        <ul className={s.skillsList}>
          {skills.map((skill, index) => {
            return (
              <li key={index} className={s.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      
      
    </section>
  );
};

export default Skills;
