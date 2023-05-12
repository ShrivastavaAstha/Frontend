var React = require("react");
var ReactDOM = require("react-dom");

//ReactDOM.render("kya dikhana hai", "kaha dikhana hai", "cllback function");

//First way:
ReactDOM.render(<h1>Hellow World!!</h1>, document.getElementById("root"));

//Second way:
// ReactDOM.render(
//   React.createElement("h1", null, "Astha"),
//   document.getElementById("root")
// );

//Third way:
var h1 = document.createElement("h1");
h1.innerHTML = "ASTHA";
document.getElementById("root").appendChild(h1);
