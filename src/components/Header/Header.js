import React, { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode, setStatus, resetProcess } from "src/actions";
import { getModes, getMode, getStatus } from "src/selectors";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const modes = useSelector(getModes);
  const mode = useSelector(getMode);
  const status = useSelector(getStatus);

  const handleChange = useCallback(
    (event) => {
      dispatch(setMode(event.target.value));
    },
    [dispatch]
  );

  const handleStartProcess = useCallback(
    (event) => {
      if (event) event.preventDefault();

      dispatch(setStatus(!status));
    },
    [dispatch, status]
  );

  const handleStopProcess = useCallback(
    (event) => {
      if (event) event.preventDefault();
      dispatch(resetProcess());
    },
    [dispatch]
  );

  const buildOptions = useCallback((modes) => {
    const options = [];
    for (let value of Object.entries(modes)) {
      options.push(
        <option key={value[1]["field"]} value={value[1]["field"]}>
          {value[0]}
        </option>
      );
    }
    return options;
  }, []);

  return (
    <header className="header">
      <form className="game__form">
        <div className="select">
          <select
            onChange={handleChange}
            value={mode}
            className="game__form__select"
          >
            <option value="" defaultValue disabled>
              Pick mode
            </option>
            {buildOptions(modes)}
          </select>
        </div>
        {!status ? (
          <button
            onClick={handleStartProcess}
            className="button button__primary game__button__select"
            disabled={!mode}
          >
            Start
          </button>
        ) : (
          <button
            onClick={handleStopProcess}
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

export default memo(Header);
