import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  
  if(data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    )

  return (
    <>
      <h1>Data</h1>
    </>
  );
};

export default App;
