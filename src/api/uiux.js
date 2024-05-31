import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getUI = () => {
  return axios
    .get(`${BASE_URL}/ui-ux`, {
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
