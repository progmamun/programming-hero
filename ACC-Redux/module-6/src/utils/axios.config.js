import axios from "axios";

let URL;

switch (process.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/";
    break;
  case "PRODUCTION":
    URL = "https://vercel.com";
    break;
  default:
    URL = "http://localhost:5000/";
}
const instance = axios.create({
  baseURL: URL,
});

export default instance;
