import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from "@mui/material";

const Nav = () => {
  return (
    <nav>
      <div className="nav--left">
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="nav--right">
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/gmail">Gmail</Link>
          </li>
          <li className="nav__link">
            <Link to="/images">Images</Link>
          </li>
          <li className="nav__link">
            <AppsIcon />
          </li>
          <li className="nav__link">
            <Avatar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
