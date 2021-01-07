import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "src/actions";

const Cell = ({ x, y }) => {
  const dispatch = useDispatch();

  const onMouseEnterHandler = useCallback(() => {
    dispatch(addToHistory(`row ${x} col ${y}`));
  }, [dispatch]);

  return <td onMouseEnter={onMouseEnterHandler}></td>;
};

export default memo(Cell);
