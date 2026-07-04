import React from "react";
import { createRoot } from "react-dom/client";

// const h1 = React.createElement("h1", null, "Hello World");
const h2 = React.createElement(
  "h2",
  {
    className: "title",
    id: "heading",
  },
  "Welcome To Mobile Dev",
);

createRoot(document.getElementById("root")).render(
  <>
    <h1 className="title" id="heading">Hello World!</h1>
    { h2 }
  </>
);
