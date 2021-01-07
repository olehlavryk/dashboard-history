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
        <small>No history yet!</small>
      </aside>
    );
  }

  return (
    <aside className="history">
      <h2>History</h2>
      <ul>
        {history
          .slice(0)
          .reverse()
          .map((item, index) => (
            <li key={index}>
              <div className="history__alert">{item}</div>
            </li>
          ))}
      </ul>
    </aside>
  );
};
