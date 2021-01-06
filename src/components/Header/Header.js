import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setMode, setStatus } from "src/actions";
import { getModes, getMode, getStatus } from "src/selectors";
import "./Header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const modes = useSelector(getModes);
  const mode = useSelector(getMode);
  const status = useSelector(getStatus);
  const options = [];

  useEffect(() => {
    if (!modes) {
      dispatch(fetchData());
    }
  }, [dispatch, modes]);

  const handleChange = (event) => {
    dispatch(setMode(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setStatus(!status));
  };

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
      <h1>StarNavi: Test task</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="game__form">
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
        <button
          className="button button__primary game__button__select"
          disabled={!mode}
        >
          Start
        </button>
      </form>
    </header>
  );
};
