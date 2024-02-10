import { Link } from "react-router-dom";
import "./navigationBtn.css";

const NavigationBtn = ({ title, path, active }) => {
  return (
    <div className={`navigation-btn ${active && "active"}`}>
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default NavigationBtn;
