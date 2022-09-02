import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#e3e3e3");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          placeholder="color title..."
        />
        <input
          onChange={(event) => setColor(event.target.value)}
          value={color}
          type="color"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default App;
