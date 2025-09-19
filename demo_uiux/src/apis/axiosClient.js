import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://be-project-reactjs.vercel.app/api/v1/product?sortType=3&page=1&limit=11",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
