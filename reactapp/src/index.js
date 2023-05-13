var React = require("react");
var ReactDOM = require("react-dom");

const arr = ["astha", "khushi", "roshni"];
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

//------------->>Syntactical sugar for fragments
ReactDOM.render(
  <>
    <h1>Hello World!!</h1>
    <p>Welcome to this new World!</p>
    <h2>Glad to see you all.</h2>
  </>,

  document.getElementById("root")
);
//Second way:
// ReactDOM.render(
//   React.createElement("h1", null, "Astha"),
//   document.getElementById("root")
// );

//Third way:
// var h1 = document.createElement("h1");
// h1.innerHTML = "ASTHA";
// document.getElementById("root").appendChild(h1);
