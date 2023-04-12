import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "head" }, [
  React.createElement("div", { id: "child1" }, "Hello from React h1 child1"),
  React.createElement("div", { id: "child2" }, "Hello from React h1 child2"),
]);

//React Component
const Title = () => {
  return <h1>Hello From Component</h1>;
};

//React Element
const element = <h1>This is an element</h1>;

//React Element contains component and eleemnt
const jsxHeading = (
  <>
    <></>
    {element}
    <h1 id="jsxID" className="jsxClass">
      Namaste react from JSX!!
    </h1>
    <Title />
  </>
);

const childElement = <h1>Hi I'm child element</h1>;

const root1 = ReactDOM.createRoot(document.getElementById("reactRoot"));
const root2 = ReactDOM.createRoot(document.getElementById("reactChildRoot"));
root1.render(jsxHeading);
root2.render(childElement);
