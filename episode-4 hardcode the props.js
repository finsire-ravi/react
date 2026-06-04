import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { AiFillCalendar } from "react-icons/ai";

// Episode 4 create online order 
/** Header 
  Logo
  nav items
  body
  container
  card
  footer
  address
  cpoyrights**/

//Basic header Component

const HeaderCompoent = () => {
  return (
    <div className="header-component">
      <div className="logo-container">
        <img className= "logocomponent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJbCVnHZ0zw2v9wvmNVB5Of3UtMG_OaOzOA&s" alt="logo" />
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

// Basic Body component

//Inline style sheet css
// const stylecard = {
//   backgroundColor: "red",
//   height: "178px"
// }

const BodyResCard = (props) => {
  console.log(props)
  return (
    // <div className="res-card" style={stylecard}> // Inline style sheet
    // <div className="res-card" style={{
//   backgroundColor: "red",
//   height: "178px"
// }}>
      <div className="res-card" >
      <img className="res-card-image" src={props.resLogo} alt="logo" />
      <h2 className="res-card-title">{props.resName}</h2>
      <h3 className="res-card-cuisine">{props.resCusine}</h3>
      <h4 className="res-card-rating">{props.resRating} Star</h4>
      <h4 className="res-card-esimated">{props.resTragetTime}</h4>
    </div>
    
  )
}

const BodyCompoent = () => {
  return (
    <div className="body-component">
      <div className="searchbarcontainer">
        <input type='text' placeholder="Enter the menu"></input>
        </div>
      <div className="res-container">
        <BodyResCard resName = "Chaminar" resLogo = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGyoRR6B7WNyIHeO0X0Japnz2EjTXvKcwgg94UimuSvGWOApX3XpwARlRNVknQprHZz1y6Tw-OLjvQN75qcjrLTc06DM5fUYGy0X7DWpJ-MTKQpeVZC-hlRaTpWwo1mT0KbAPKfUg=s1360-w1360-h1020-rw" resCusine="Indian Food" resRating= "4.5" resTragetTime="37 minutes"/>
        <BodyResCard resName = "KFC" resLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/KFC_logo-image.svg/330px-KFC_logo-image.svg.png" resCusine="Indian KFC Food" resRating= "4.9" resTragetTime="40 minutes"/>
      </div>

    </div>
  )
}



const Layout = () => {
  return (
    <div id="layoutcomponent">
      <HeaderCompoent />
      <BodyCompoent />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<Layout />)


