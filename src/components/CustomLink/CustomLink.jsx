import React from "react";

const CustomLink = ({ name1, name2, pic, path, title }) => {
  return (
    <div>
      <a href={path} target="_blank" rel="noopener noreferrer" title={title}>
        {name1} <br /> {name2}
      </a>
    </div>
  );
};

export default CustomLink;
