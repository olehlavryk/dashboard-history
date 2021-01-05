import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "src/actions";
import { getModes } from "src/selectors";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const modes = useSelector(getModes);
  const options = [];
  const [mode, setMode] = useState("");

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  const handleSubmit = () => {
    alert("submit");
  };

  useEffect(() => {
    if (!modes) {
      dispatch(fetchData());
    }
  }, [dispatch, modes]);

  if (!modes) return null;

  for (let value of Object.entries(modes)) {
    options.push(
      <option key={value[1]["field"]} value={value[1]["field"]}>
        {value[0]}
      </option>
    );
  }

  return (
    <header className="header">
      <h1>Squires</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} value={mode}>
          <option defaultValue>Pick up mode</option>
          {options}
        </select>
        <button>Start</button>
        {mode}
      </form>
    </header>
  );
};

export default App;
