import React, { useEffect } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const HeaderCompoent = () => {
  const [buttonComponet, setButtonComponent] = useState("Login");
  console.log("Header Component");
  useEffect(() => {
    console.log("USEEFFECT Called");
  }, [buttonComponet]);
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
            <Link to="/login">Login</Link>
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
          <button
            onClick={() => {
              {
                buttonComponet === "Login"
                  ? setButtonComponent("Logout")
                  : setButtonComponent("Login");
              }
            }}
          >
            {buttonComponet}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCompoent;
