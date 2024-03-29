import axios from "axios";
const VITE_WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
export default axios.create({
  baseURL: `${VITE_WEATHER_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: false,
});
