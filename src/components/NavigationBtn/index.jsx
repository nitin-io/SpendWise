import { Link, useLocation } from "react-router-dom";
import "./navigationBtn.css";

const NavigationBtn = ({ title, path }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={pathname === path ? "navigation-btn active" : "navigation-btn"}
    >
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default NavigationBtn;
