import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#e3e3e3");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder="color title..." />
        <input type="color" />
        <button>Add</button>
      </form>
    </>
  );
};

export default App;
