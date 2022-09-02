import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`Its ${emotion} right now!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`Its ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
    </>
  );
};

export default App;
