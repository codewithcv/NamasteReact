import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const myFoodApp = (
  <>
    <Header></Header>
    <Body></Body>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myFoodApp);
