import {RootState} from "@redux/store";
export const selectDailyWeather = (state: RootState) => {
  return state.dailyWeather;
};
export const selectCurrentWeather = (state: RootState) => {
  return state.currentWeather;
};
