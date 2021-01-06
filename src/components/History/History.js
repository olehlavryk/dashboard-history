import React from "react";
import { useSelector } from "react-redux";
import { getHistory } from "src/selectors";

export const History = () => {
  const history = useSelector(getHistory);
  if (history.length === 0) {
    return (
      <>
        <h2>History</h2>
        <div>No history yet!</div>
      </>
    );
  }

  return (
    <>
      <h2>History</h2>
      <ul>
        {history.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
