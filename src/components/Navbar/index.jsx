import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <IoMenu className="nav-menu-icon" />
      <div className="nav-title">SPENDWISE</div>
      <ul className="nav-list">
        <li>
          <Link className="nav-link">LOG CREDITS</Link>
        </li>
        <li>
          <Link className="nav-link">LOG AN EXPENSE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
