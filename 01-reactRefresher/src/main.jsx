import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";

// const h1 = React.createElement("h1", null, "Hello World");
const h2 = React.createElement(
  "h2",
  {
    className: "title",
    id: "heading",
  },
  "Welcome To Mobile Dev",
);

let name = "Abhishek";

createRoot(document.getElementById("root")).render(
  <>
    <h1 className="title" id="heading">Hello World! { name }</h1>
    {h2}
    <App />
    <App2 />
  </>
);
