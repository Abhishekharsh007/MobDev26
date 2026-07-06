import React, { useState } from 'react'

const App3 = () => {
    const [darkMode, setDarkMode] = useState(false);

    function onToggleTheme() { 
        setDarkMode(!darkMode);
    }
    
  return (
      <div style={{
          height: "40vh",
          backgroundColor: darkMode ? "#121212" : "#fff",
          color: darkMode ? "#fff" : "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "0.3s",
      }}>
          <h1>Mode { darkMode ? "Change to light" : "Change to dark"}</h1>
        <button onClick={onToggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App3;
