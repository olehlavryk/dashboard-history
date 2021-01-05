import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionType from "src/actions/types";
const initialState = {
  modes: null,
  history: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA: {
      const { data } = payload;

      return {
        ...state,
        modes: data,
      };
    }

    default: {
      return state;
    }
  }
};

export const getStore = () => {
  const middleware = () => (next) => (action) => {
    return next(action);
  };
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
};
