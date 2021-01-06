import React from "react";
import { useSelector } from "react-redux";
import { getMode, getStatus } from "src/selectors";
import { Header } from "src/components/Header/Header";
import { Field } from "src/components/Field/Field.js";
import { History } from "src/components/History/History";
import "./App.css";

const App = () => {
  const mode = useSelector(getMode);
  const status = useSelector(getStatus);

  return (
    <>
      <Header />
      <main>
        {!status ? "Select Mode and start the game" : <Field mode={mode} />}
      </main>
      <History />
    </>
  );
};

export default App;
