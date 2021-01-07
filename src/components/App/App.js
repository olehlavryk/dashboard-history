import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "src/actions";
import { getModes } from "src/selectors";
import Field from "src/components/Field/Field";
import History from "src/components/History/History";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const modes = useSelector(getModes);

  useEffect(() => {
    if (!modes) {
      dispatch(fetchData());
    }
  }, [dispatch, modes]);

  if (!modes) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      <h1>StarNavi test task</h1>
      <div className="app">
        <Field />
        <History />
      </div>
    </div>
  );
};

export default memo(App);
