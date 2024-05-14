import axios from "axios";

const api = axios.create({
  baseURL: "https://other-options-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
