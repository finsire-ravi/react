import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//Epi - 3
//jsx  is not html in js and js/html/jsx are different all are not same
//jsx is a syntax

//jsx =>  (transpiled before it reaches the js engine)- parcel - Babel
const jsxheading = <h1 className= "colorName"> Jsx Combine for html and js (html like syntax or xml like syntax) </h1>;

console.log(jsxheading); // this will  object

const root1 = ReactDOM.createRoot(document.getElementById("app"));

root1.render(jsxheading)


// React Functional components

//if function return the react element this is a functioncal Component

// const FunctionCompeent =  () => {
//     return <h1>"Welcome the Function components"</h1>
// }; 

const FunctionCompeent1 = () => (<h1>"Welcome the Function components"</h1>);

// Both FunctionCompeent && FunctionCompeent1  both are same  and most of the develop not write written

const root = ReactDOM.createRoot(document.getElementById("app1"));

root.render(<FunctionCompeent1 />) // this is way to render the functional component


// React Functional components

const FunctionCompeent = () => (  <h1 className="title">"Welcome the Function Render components"</h1>); 

const FunctionCompeent1 = () => (
    <div>
        <FunctionCompeent /> 
        <h1>"Welcome the Function components"</h1>
    </div>
);

// Ithula they explain the render the FunctionCompeent to FunctionCompeent1 using this syntax < />. and this is a component composition

const root = ReactDOM.createRoot(document.getElementById("app1"));

root.render(<FunctionCompeent1 />) // this is way to render the functional component



// React Functional components normal javascript functional componets

const FunctionCompeent = function () { 
    return ( <h1 className="title">"Welcome the Function Render components"</h1>)
}; 

const FunctionCompeent1 =  function () { 
    return (
    <div>
        <FunctionCompeent /> 
        <h1>"Welcome the Function components"</h1>
    </div>
)};

// Ithula they explain the render the FunctionCompeent to FunctionCompeent1 using this syntax < />. and this is a component composition

const root = ReactDOM.createRoot(document.getElementById("app1"));

root.render(<FunctionCompeent1 />) // this is way to render the functional component


// React Functional components normal javascript functional componets

const normalelement = <h1 className="title">"Welcome the Normal Elemnt"</h1>

const number = 12121
const number1 = 10 * 20

const FunctionCompeent1 =  () => { 
    return (
    <div>
         
        <h1>"Welcome the Function components"</h1>
        <h2>{number}</h2>
        <h2>{number1}</h2>
        {/* //react element put inside the function component this is the way */}
        {normalelement} 
    </div>
)};

// Ithula they explain the render the FunctionCompeent to FunctionCompeent1 using this syntax < />. and this is a component composition

const root = ReactDOM.createRoot(document.getElementById("app1"));

root.render(<FunctionCompeent1 />) // this is way to render the functional component
