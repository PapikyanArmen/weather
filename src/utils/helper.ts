import {dailyWeatherList} from "@customTypes/Weather.ts";

export function groupForecastByDay(list: dailyWeatherList[] | undefined) {
  const dailyForecast: {[key: string]: dailyWeatherList[]} = {};

  list &&
    list.forEach((forecast: dailyWeatherList) => {
      const date = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      if (!dailyForecast[date]) {
        dailyForecast[date] = [];
      }
      dailyForecast[date].push(forecast);
    });

  const orderedForecast = Object.keys(dailyForecast)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .map((key, index) => {
      return {list: dailyForecast[key], index: index + 1};
    });

  return orderedForecast;
}

export const ICON_BASE_URL = import.meta.env.VITE_WEATHER_ICON_BASE_URL;
