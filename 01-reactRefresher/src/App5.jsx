import React, { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile.jsx";

const App5 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/Abhishekharsh007`);
        const data = await response.json();
          console.log(data);
          setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();  
  }, []);

    return <div>
        <GitHubProfile data={data} isLoading={isLoading} />
    </div>;
};

export default App5;
