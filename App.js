// Example 1

// const root = ReactDOM.createRoot(document.getElementById("app"));

// console.log(root);
// const hq = React.createElement(
//   "h1",
//   { className: "colorName" },
//   "Hello, React!",
// );
// console.log(hq); // return this obj
// root.render(hq); // render method basically convert the obj puts in tag in dom
// root.render(React.createElement("h1", null, "Hello, Haha!"));

// Example 2

// <div id = "parent">
//     <div id = "chile">
//         <h1 className=colorName> dfsdf</h1>
//     </div>
// </div>

//above eruka html element ah epd react la use panurathu (Nested html structure below flow)

// <div id = "parent">
//     <div id = "chile">
//         <h1 className=colorName> dfsdf</h1>
// <h2 className=colorName> dfsdf</h2>
//     </div>
// </div>

//above eruka html element ah epd react la use panurathu (Nested html structure below flow and 2 h tag eruku so athuku array of chilider use pananum)

const root = ReactDOM.createRoot(document.getElementById("app"));

//Eaxmple 2 first htmlt react code
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "chile" },
//     React.createElement("h1", { className: "colorName" }, "asdasd"),
//   ),
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "chile" }, [
    React.createElement("h1", { className: "colorName" }, "Sankar Ravi"),
    React.createElement("h2", { className: "colorName" }, "San"),
  ]),
);
root.render(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "chile" }, [
    React.createElement("h1", { className: "colorName" }, "Ravi"),
    React.createElement("h2", { className: "colorName" }, "Ravi"),
  ]),
);
root1.render(parent1);

//Render - parent1 is a ojcetion putts in html elements
//createElement - 3 args first html tab, 2nd attributs, 3. Inner html like children
//we have mulitple chlidren we have to pass this in array for thus children for
