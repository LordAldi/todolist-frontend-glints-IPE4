import React from 'react'
import { NavLink } from "react-router-dom";


const MenuItem = (props) => {
    
    const { name, iconClassName, onClick, } = props;
    
    return (
        <li onClick={onClick}>
      <NavLink to={name} className="menu-item">
        <span>{name}</span>
      </NavLink>
    </li>
    )
}

export default MenuItem;
