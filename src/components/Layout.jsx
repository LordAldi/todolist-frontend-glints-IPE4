import React, { useState } from "react";
import SideMenu from "./SideMenu";

const Layout = (Children) => {
  const [inactive, setInactive] = useState(false);

  return (props) => (
    <>
      <SideMenu
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      <div className={`container-content ${inactive ? "inactive" : ""}`}>
        <Children />
      </div>
    </>
  );
};

export default Layout;
