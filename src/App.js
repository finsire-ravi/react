import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { AiFillCalendar } from "react-icons/ai";
import Header from "./components/Header"
import Body from "./components/Body"

const Layout = () => {
  return (
    <div id="layoutcomponent">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<Layout />)


