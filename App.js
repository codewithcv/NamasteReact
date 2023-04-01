import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1", { id: "head" }, [
  React.createElement("div", { id: "child1" }, "Hello from React h1 child1"),
  React.createElement("div", { id: "child2" }, "Hello from React h1 child2"),
]);
const root1 = ReactDOM.createRoot(document.getElementById("reactRoot"));

root1.render(heading1);
