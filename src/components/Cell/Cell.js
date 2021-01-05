import React from "react";

export const Cell = ({ x, y }) => {
  const onMouseEnterHandler = () => {
    console.log(`row ${x} col ${y}`);
  };

  return <td onMouseEnter={onMouseEnterHandler}></td>;
};
