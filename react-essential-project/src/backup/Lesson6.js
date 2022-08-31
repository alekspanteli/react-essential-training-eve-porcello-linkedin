import "./App.css";
import { useState } from "react";

const App = () => {
  const [emotion, setEmotion] = useState("happy");
  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button>
    </>
  );
};

export default App;
