import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderCompoent = () => {
  const [buttonComponet, setButtonComponent] = useState("Login");
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className="logocomponent" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
