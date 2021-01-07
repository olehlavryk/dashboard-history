import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "src/reducer";

export const getStore = () => {
  const middleware = () => (next) => (action) => {
    return next(action);
  };
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
};
