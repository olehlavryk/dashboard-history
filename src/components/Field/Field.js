import React from "react";
import { Cell } from "src/components/Cell/Cell";
import "./Field.css";

export const Field = ({ mode }) => {
  const renderTable = () => {
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < mode; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < mode; j++) {
        children.push(<Cell key={j} x={i + 1} y={j + 1} />);
      }
      //Create the parent and add the children
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };

  return (
    <div>
      <table className="squares__table">
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};
