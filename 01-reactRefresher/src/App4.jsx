import React, { useState, useEffect } from "react";

const App4 = () => {
    const [darkMode, setDarkMode] = useState(false);

    const [count, setCount] = useState(0);

    function onToggleTheme() {
      setDarkMode(!darkMode);
    }

    // *1. Without dep array [] 
    // useEffect(() => { 
    //     console.log(`Clicked without dep array`); 
    // });
    
    // *2. With empty dep array []
    // useEffect(() => { 
    //     console.log(`Clicked with empty dep array`);
    // }, [])
    
    // *3. With non-empty dep array []
    useEffect(() => {
      console.log(`Clicked with non-empty dep array`);
    }, [count]);

  return (
    <div
      style={{
        height: "40vh",
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>Mode {darkMode ? "Change to light" : "Change to dark"}</h1>
      <button onClick={onToggleTheme}>Toggle Theme</button>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
    </div>
  );
};

export default App4;
