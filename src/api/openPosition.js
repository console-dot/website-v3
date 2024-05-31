import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const setOpenPosition = (newForm) => {
  return axios
    .post(BASE_URL + "/mail/apply", newForm, {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    })
    .then((res) => {
      console.log(res, "reponse");
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
