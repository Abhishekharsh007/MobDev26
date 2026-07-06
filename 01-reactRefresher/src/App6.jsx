import React from 'react'

const App6 = () => {
    const onclick = (event) => { 
        console.log(event);
    }

  return (
    <button onClick={onclick}>Click Me</button>
  )
}

export default App6;
