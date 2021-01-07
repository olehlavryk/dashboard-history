import * as actionType from "src/types";

const initialState = {
  modes: null,
  mode: "",
  status: false,
  history: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.RESET_PROCESS: {
      return {
        ...state,
        mode: "",
        status: false,
        history: [],
      };
    }

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
        history: [],
      };
    }

    case actionType.SET_STATUS: {
      const { status } = payload;

      return {
        ...state,
        status,
      };
    }

    case actionType.ADD_TO_HISTORY: {
      const { text } = payload;
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
