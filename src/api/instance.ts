import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API,
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
