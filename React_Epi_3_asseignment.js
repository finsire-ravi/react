import React, { Component } from "react";
import ReactDOM from "react-dom/client";


// Nested Header using React.createElement

// const heading = React.createElement(
//   "div",
//   { className: "title" },
//   [
//     React.createElement("h1", {}, "Heading 1"),
//     React.createElement("h2", {}, "Heading 2"),
//     React.createElement("h3", {}, "Heading 3"),
//   ]
// );

// Same using JSX
const heading = (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

//Functional Component Version

// const HeadingComponent = () => (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading 3</h3>
//     </div>
// );

//Passing Attributes in JSX
// const HeadingComponent = () => (
//   <div
//     className="title"
//     id="heading"
//   >
//     <h1>React</h1>
//   </div>
// );


//Component Composition Example

// const Title = () => (
//   <h1>React Course</h1>
// );

// const Header = () => (
//   <div>
//     <Title />
//     <h2>Namaste React</h2>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("app1"));

// root.render(<Header />)

//or

// const Title = () => (
//   <h1>React Course</h1>
// );

// const Header = (
//   <div>
//     {Title()}
//     <h2>Namaste React</h2>
//   </div>
// );


//Coding Assignment 2 - Header Component
const Header = () => {

  return (
    
    <div className="header">

      <div className="logo">
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  alt="logo" alt="logo" />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="user">
        👤
      </div>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app1"));

root.render(<Header />)