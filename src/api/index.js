import axios from "axios";

const url = "http://demo1030918.mockable.io/";

const getData = () => {
  return axios.get(url).then((response) => {
    return response.data;
  });
};

export const api = {
  getData,
};
