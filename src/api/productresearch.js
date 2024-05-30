import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const getproductresearchpage = () => {
  return axios
    .get(`${BASE_URL}/productRS`, {
      headers: {
        "Content-Type": "application/json",
        Version: "v2 ",
      },
    })
    .then((res) => {
      if (res?.data) return res?.data;
    })
    .catch((err) => {
      console.error("Failed to fetch product research page data", err);
      throw new Error("Failed to fetch product research page data");
    });
};
