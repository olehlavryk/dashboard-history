import React, { memo } from "react";
import App from "src/components/App/App";
import { Provider } from "react-redux";

const AppContainer = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default memo(AppContainer);
