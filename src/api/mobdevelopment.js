import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getMobDevelopment = () => {
  return axios
    .get(`${BASE_URL}/mob-dev/6641fa2d67b384de50e10bf4`, {
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
