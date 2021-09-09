import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, onClick, to } = props;

  return (
    <li onClick={onClick}>
      <NavLink to={to} className="menu-item">
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
