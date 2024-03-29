import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {dailyWeatherData} from "@customTypes/Weather.ts";
import {getDailyWeather, getCurrentWeather} from "@api/weather.ts";

interface WeatherDailyInitialState {
  dailyWeather: {
    data: dailyWeatherData;
    loading: boolean;
    error: string | null;
  };
}

const initialState: WeatherDailyInitialState = {
  dailyWeather: {
    data: null,
    loading: false,
    error: "",
  },
};
export const fetchDailyWeather = createAsyncThunk(
  "weatherDaily/fetch",
  async () => {
    const response = await getDailyWeather();
    return response.data;
  },
);

export const fetchCurrentWeather = createAsyncThunk(
  "weatherCurrent/fetch",
  async () => {
    const response = await getCurrentWeather();
    return response.data;
  },
);
const dailyWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDailyWeather.pending, state => {
      state.dailyWeather.loading = true;
      state.dailyWeather.error = null;
    });
    builder.addCase(fetchDailyWeather.fulfilled, (state, action) => {
      state.dailyWeather.loading = false;
      state.dailyWeather.data = action.payload;
    });
    builder.addCase(fetchDailyWeather.rejected, (state, action) => {
      state.dailyWeather.loading = false;
      state.dailyWeather.error = action.error.message || new Error().message;
    });
  },
});

export default dailyWeatherSlice.reducer;
