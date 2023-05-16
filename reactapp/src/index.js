import "./index.css";
var React = require("react");
var ReactDOM = require("react-dom");

//In React it's possible for render() to return an array of elements.
//ReactDOM.render("kya dikhana hai", "kaha dikhana hai", "cllback function");

//First way:

//------------>>>>Array Method
ReactDOM.render(
  [
    <h1>Hello World!!</h1>,
    <p>Welcome to this new World!</p>,
    <h2>Glad to see you all.</h2>,
  ],
  document.getElementById("root")
);

//------------->>Div Method
ReactDOM.render(
  <div>
    <h1>Hello World!!</h1>
    <p>Welcome to this new World!</p>
    <h2>Glad to see you all.</h2>
  </div>,

  document.getElementById("root")
);

//------------>>React Fragment
ReactDOM.render(
  <React.Fragment>
    <h1>Hello World!!</h1>
    <p>Welcome to this new World!</p>
    <h2>Glad to see you all.</h2>
  </React.Fragment>,

  document.getElementById("root")
);

//----------->>Syntactical sugar for fragments
ReactDOM.render(
  <>
    <h1>Hello World!!</h1>
    <p>Welcome to this new World!</p>
    <h2>Glad to see you all.</h2>
  </>,

  document.getElementById("root")
);
//Second way:
ReactDOM.render(
  React.createElement("h1", null, "Astha"),
  document.getElementById("root")
);

//Third way:
//var h1 = document.createElement("h1");
//h1.innerHTML = "ASTHA";
//document.getElementById("root").appendChild(h1);

//-------------------------------Netflix Program---------------------
// import React from "react";
// import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Netflix Pick</h1>
    <p>Here the list of 5 netflix series</p>
    <ol>
      <li>Dark</li>
      <li>Extra curricular</li>
      <li>My Holo Love</li>
      <li>My first-2 love</li>
      <li>Mr Robot</li>
    </ol>
  </>,
  document.getElementById("root")
);
//---------------------------------------------------------------------

//------------------ Expressions in JSX -------------------------------
const flname = "Astha Srivastava";
ReactDOM.render(
  <>
    <h1>My name is {flname} </h1>
    <p>My lucky number is {5 + 6}</p>
  </>,
  document.getElementById("root")
);
//----------------------------------------------------------------------

//--------------------------Concatination-------------------------------
const fname = "Astha";
const lname = "Srivastava";

//-------First way through curly braces.
ReactDOM.render(
  <>
    <h1>
      My name is {fname} {lname}
    </h1>
  </>,
  document.getElementById("root")
);
//-------Second way through concatination.
ReactDOM.render(
  <>
    <h1>My name is {fname + " " + lname}</h1>
  </>,
  document.getElementById("root")
);
//--------Third way through Template Literals.
ReactDOM.render(
  <>
    <h1>{`My name is ${fname} ${lname}`}</h1>
    <h2>{`My first name is ${fname} and my last name is ${lname}.`}</h2>
  </>,
  document.getElementById("root")
);
//------------------------------------------------------------------------

//--------------------------------------Practice--------------------------
// import React from "react";
// import ReactDOM from "react-dom";
const name = "Astha";
//const currDate = new Date().getDate();
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>Hello, My name is {name}</h1>
    <p>Current Date is = {currDate} </p>
    <p>Current Time is = {currTime} </p>
  </>,
  document.getElementById("root")
);
//---------------------------------------------------------------------------

//------------------------------- JSX Attribute -----------------------------
// import React from "react";
// import ReactDOM from "react-dom";

const names = "Astha";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "www.youtube.com";

const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px green",
  margin: "70px 0",
};
ReactDOM.render(
  <>
    <h1 contentEditable="true"> My name is {names} </h1>
    {/* <h2 className="heading">My name is {names}</h2> */}
    <h2
      style={heading}
      // {{
      //   color: "#fa9191",
      //   textTransform: "capitalize",
      //   textAlign: "center",
      // }}
    >
      My name is {name}
    </h2>
    <div className="img_div">
      <img src={img1} alt="random images" />
      <img src={img2} alt="random images" />
      <a href={links} target="_blank">
        <img src={img3} alt="random images" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
//---------------------------------------------------------------------------

//-------------------------------
