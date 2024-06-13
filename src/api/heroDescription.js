import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getHeroDescription = () => {
  return axios
    .get(`${BASE_URL}/hero-description`, {
      headers: {
        "Content-Type": "application/json",
        version: "v2",
      },
    })
    .then((res) => {
      if (res?.data?.token)
        localStorage.setItem("@dashboard-token", res?.data?.token);
      return res?.data;
    })
    .catch((err) => console.log(err));
};
