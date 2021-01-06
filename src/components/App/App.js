import React from "react";

import { Field } from "src/components/Field/Field.js";
import { History } from "src/components/History/History";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Field />
      <History />
    </div>
  );
};

export default App;
