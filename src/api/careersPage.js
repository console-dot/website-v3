import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getOpenPositions = () => {
  return axios
    .get(`${BASE_URL}/open-positions`, {
      headers: {
        "Content-Type": "application/json",
        Version: "v2 ",
      },
    })
    .then((res) => {
      if (res?.data) return res?.data;
    })
    .catch((err) => console.log(err));
};

export const editOpenPositionCount = (values, id) => {
  return axios
    .put(`${BASE_URL}/open-positions/${id}`, values, {
      headers: {
        "Content-Type": "application/json",
        Version: "v2 ",
      },
    })
    .then((res) => {
      if (res?.data) return res?.data;
    })
    .catch((err) => console.log(err));
};
