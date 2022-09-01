import "./App.css";
import { useState, useEffect } from "react";

const GitHubUser = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) return <GitHubUser name={data.name} />;

  return (
    <>
      <h1>Data</h1>
    </>
  );
};

export default App;
