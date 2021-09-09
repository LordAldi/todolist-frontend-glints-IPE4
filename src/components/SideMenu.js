import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { GoSignOut } from "react-icons/go";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/authContext";

/**
 * @author
 * @function SideMenu
 **/

const menuItems = [
  { name: "Dashboard", to: "/", iconClassName: "bi bi-laptop" },
  { name: "Users", to: "/Users", iconClassName: "bi bi-people" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const { auth, logout } = useAuth();
  const history = useHistory();
  useEffect(() => {
    props.onCollapse(inactive);
  }, [inactive]);
  console.log(auth);
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <div className="avatar">
            <img
              variant="top"
              src={`https://avatars.dicebear.com/api/gridy/${auth.nama
                .split(" ")
                .join("")}.svg`}
              alt="avatar"
            />
            <div className="user-info">
              <h5>{auth.nama}</h5>
              <p>{auth.role}</p>
            </div>
          </div>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              iconClassName={menuItem.iconClassName}
              to={menuItem.to}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="footer">
        <GoSignOut />
        <div
          onClick={() => {
            logout(history);
          }}
          className="text"
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
