import React from "react";
import { useSelector } from "react-redux";
import { getHistory } from "src/selectors";
import "./History.css";

export const History = () => {
  const history = useSelector(getHistory);

  if (history.length === 0) {
    return (
      <aside className="history">
        <h2>History</h2>
        <div>No history yet!</div>
      </aside>
    );
  }

  return (
    <aside className="history">
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};
