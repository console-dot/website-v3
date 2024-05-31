import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getWebDevelopment = () => {
  return axios
    .get(`${BASE_URL}/web-dev/6641f633464855376ec0a145`, {
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
