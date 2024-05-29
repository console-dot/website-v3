import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_NODE_ENV === "local"
    ? "http://localhost:5000/api/v1"
    : "";

const config = {
  BASE_URL,
};

export default config;
