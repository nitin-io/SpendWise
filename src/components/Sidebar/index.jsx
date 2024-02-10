import React from "react";

const Sidebar = ({ side, children }) => {
  return <div className={`sidebar ${side}`}>{children}</div>;
};

export default Sidebar;
