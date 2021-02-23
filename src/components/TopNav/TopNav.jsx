import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

const links = [
  {
    id: "01",
    path: "/",
    title: "WEB страница",
    exact: true,
  },
  {
    id: "02",
    path: "/pdf",
    title: "PDF версия для печати",
  },
];

const TopNav = () => {
  return (
    <ul className="TopNav">
      {links.map(({ id, path, title, exact }) => (
        <li className="list" key={id}>
          <NavLink className="link" to={path} exact={exact}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TopNav;
