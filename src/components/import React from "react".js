import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router";

const HeaderCompoent = () => {
  const navigate = useNavigate();
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className="logocomponent" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <AiFillCalendar />
          </li>
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCompoent;
