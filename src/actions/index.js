import * as actionType from "src/actions/types";
import { api } from "src/api";

export const setData = (data) => ({
  type: actionType.SET_DATA,
  payload: { data },
});

export const fetchData = () => (dispatch) =>
  api
    .getData()
    .then((data) => {
      dispatch({ type: actionType.FETCH_DATA_SUCCESS });
      dispatch(setData(data));
    })
    .catch(() => dispatch({ type: actionType.FETCH_DATA_FAIL }));
