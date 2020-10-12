import React from "react";
import { skills } from "./data";

const Projects = () => {
  return (
    <section>
      <div className="request">
        <h3>Требования к будущей работе:</h3>
        <p>Должность:Разработчик React, Верстальщик HTML, React</p>
        <p>Зарплата (минимум): 1200 USD</p>
        <p>Режим работы: удаленно</p>
        <p>График работы: полный рабочий день</p>
      </div>

      <div className="skills">
        <h3>Ключевые навыки:</h3>
        <ul className="my-skills">
          {skills.map((skill, index) => {
            return (
              <li key={index}>
                <span>{skill}</span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
