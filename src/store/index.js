import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as actionType from "src/actions/types";
const initialState = {
  modes: null,
  mode: "",
  status: false,
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

    case actionType.SET_MODE: {
      const { mode } = payload;

      return {
        ...state,
        mode,
      };
    }

    case actionType.SET_STATUS: {
      const { status } = payload;
      console.log(status);

      return {
        ...state,
        status,
      };
    }

    case actionType.ADD_TO_HISTORY: {
      const { text } = payload;
      console.log(text);
      const history = [...state.history, text];

      return {
        ...state,
        history,
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
