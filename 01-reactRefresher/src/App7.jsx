import React, { useState } from "react";

const App7 = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Controlled Form</h1>      
      <input
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </div>
  );
};

export default App7;
