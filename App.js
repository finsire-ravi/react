import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("app"));

console.log(root);
const hq = React.createElement(
  "h1",
  { className: "colorName" },
  "Hello, React!",
);
console.log(hq); // return this obj
root.render(hq); // render method basically convert the obj puts in tag in dom
root.render(React.createElement("h1", null, "Hello, Haha!"));
