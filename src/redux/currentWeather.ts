import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {currentWeatherData} from "@customTypes/Weather.ts";
import {getCurrentWeather} from "@api/weather.ts";

interface WeatherCurrentInitialState {
  currentWeather: {
    data: currentWeatherData;
    loading: boolean;
    error: string | null;
  };
}

const initialState: WeatherCurrentInitialState = {
  currentWeather: {
    data: null,
    loading: false,
    error: "",
  },
};

export const fetchCurrentWeather = createAsyncThunk(
  "weatherCurrent/fetch",
  async () => {
    const response = await getCurrentWeather();
    return response.data;
  },
);
const currentWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCurrentWeather.pending, state => {
      state.currentWeather.loading = true;
      state.currentWeather.error = null;
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.currentWeather.loading = false;
      state.currentWeather.data = action.payload;
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      state.currentWeather.loading = false;
      state.currentWeather.error = action.error.message || new Error().message;
    });
  },
});

export default currentWeatherSlice.reducer;
