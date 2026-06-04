import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import {LOGO_URL} from "../utils/constants"
const HeaderCompoent = () => {
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className= "logocomponent" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li><AiFillCalendar /></li>
        </ul>
      </div>

    </div>
  )
}

export default HeaderCompoent;
