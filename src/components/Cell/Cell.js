import React from "react";
import { useDispatch } from "react-redux";
import * as actionType from "src/actions/types";
import { addToHistory } from "src/actions";

export const Cell = ({ x, y }) => {
  const dispatch = useDispatch();
  const onMouseEnterHandler = () => {
    dispatch(addToHistory(`row ${x} col ${y}`));
    // console.log(`row ${x} col ${y}`);
  };

  return <td onMouseEnter={onMouseEnterHandler}></td>;
};
