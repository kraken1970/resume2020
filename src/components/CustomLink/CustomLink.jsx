import React from "react";
import s from './CustomLink.module.scss'

const CustomLink = ({ type, name1, name2, Pic, path, title }) => {
  
  return (
    <div className={type='contact'? s.contactClass: s.projectClass} >
      <a href={path} target="_blank" rel="noopener noreferrer" title={title}>
        {name1} <br /> {name2}
      </a>
    </div>
  );
};

export default CustomLink;
