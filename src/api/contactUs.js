import axios from "axios";
import config from "./config";

const BASE_URL = config.BASE_URL;

export const setContact = (newForm) => {
  return axios
    .post(BASE_URL + "/mail/contact", newForm ) .then((res) => {
        console.log(res, "reponse");
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
};
