import React from 'react';
import { projects } from 'data';
import s from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={s.projects}>
      <div className="container">
        <h3 className={s.title}>Примеры некоторых проектов с моим участием:</h3>

        <div className={s.projectsList}>
          {projects.map(({ name, path, pic, code }) => (
            <div key={name} className={s.project}>
              <h4 className={s.projectTitle}>{name}</h4>
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
              >
                <img src={pic} alt="projectPic" className={s.pic} />
                <p className={s.path}>{path}</p>
              </a>
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.code}
                >
                  Код на Github: {code}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
