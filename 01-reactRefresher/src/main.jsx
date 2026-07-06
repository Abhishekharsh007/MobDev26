import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";
import App5 from "./App5.jsx";
import App6 from "./App6.jsx";
import App7 from "./App7.jsx";
import App8 from "./App8.jsx";

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
    <App3 />
    <App4 />
    <App5 />
    <App6 />
    <App7 />
    <App8 />
  </>
);
