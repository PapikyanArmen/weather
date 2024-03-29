import http from "./axiosConfig.ts";
const API_KEY = import.meta.env.VITE_API_KEY;
export const getDailyWeather = (
  city?: string,
  units?: "metric" | "imperial",
) => {
  return http.get(
    `/data/2.5/forecast?units=${units || "metric"}&q=${city || "Yerevan"}&appid=${API_KEY}`,
  );
};
export const getCurrentWeather = (
  city?: string,
  units?: "metric" | "imperial",
) => {
  return http.get(
    `/data/2.5/weather?units=${units || "metric"}&q=${city || "Yerevan"}&appid=${API_KEY}`,
  );
};
