import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
  -logo
  -nav items
*Body
  -search
  -restaurantContainer
    -RestaurantCard
*Footer
  -copyright
  -lnks
  -address
  -contact
*/

const Title = (
  <h1 className="heading" tabIndex="5">
    Hello React
  </h1>
);

//React component
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>React Functional Component </h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
/*
<div id="parent">
    <div id="child1">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>
</div>
*/

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag"),
//   ]),
// ]);

// const heading = React.createElement("h1", { id: "heading" }, "hello react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
