import "./App.css";
import { useReducer } from "react";

const App = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </>
  );
};

export default App;
