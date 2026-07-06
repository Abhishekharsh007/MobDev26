import React, { useState } from "react";

const App8 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    console.log(e.target.elements[1].value);
    console.log(e.target.elements[2].value);

      const obj = {};
      obj.name = e.target.elements.name.value;
      obj.email = e.target.elements[1].value;
      obj.password = e.target.elements[2].value;

      console.log(obj);
  };

  return (
    <div>
      <h1>Uncontrolled From</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input email="email" />
        <input password="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App8;
