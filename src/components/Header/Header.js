import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode, setStatus, resetProcess } from "src/actions";
import { getModes, getMode, getStatus } from "src/selectors";
import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const modes = useSelector(getModes);
  const mode = useSelector(getMode);
  const status = useSelector(getStatus);
  const options = [];

  const handleChange = (event) => {
    dispatch(setMode(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setStatus(!status));
  };

  const handleStopProcess = (event) => {
    event.preventDefault();
    dispatch(resetProcess());
  };

  for (let value of Object.entries(modes)) {
    options.push(
      <option key={value[1]["field"]} value={value[1]["field"]}>
        {value[0]}
      </option>
    );
  }

  return (
    <header className="header">
      <form className="game__form">
        <div className="select">
          <select
            onChange={handleChange}
            value={mode}
            className="game__form__select"
          >
            <option value="" defaultValue>
              Pick mode
            </option>
            {options}
          </select>
        </div>
        {!status ? (
          <button
            onClick={(e) => handleSubmit(e)}
            className="button button__primary game__button__select"
            disabled={!mode}
          >
            Start
          </button>
        ) : (
          <button
            onClick={(e) => handleStopProcess(e)}
            className="button button__danger game__button__select"
            disabled={!mode}
          >
            Stop
          </button>
        )}
      </form>
    </header>
  );
};
