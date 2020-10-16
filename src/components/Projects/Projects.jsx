import React from "react";
import { projects } from "data";
import s from "./Projects.module.scss";

const Projects = () => {
  return (
    <section>

      <div className="container">
      <h3 className={s.title} >Примеры некоторых проектов с моим участием:</h3>

<div className={s.projectsList}>
  {projects.map(({ name, path, pic }) => (
    <div key={name} className={s.project}>
      <h4 className={s.projectTitle} >{name}</h4>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className={s.link}
      >
        <img src={pic} alt="projectPic" className={s.pic} />
        <p className={s.path}>{path}</p>
      </a>
    </div>
  ))}
</div>

<h3 className={s.subtitle} >Код готов показать при разговоре через Skype</h3>
      </div>
      
    </section>
  );
};

export default Projects;
