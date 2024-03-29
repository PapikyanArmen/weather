import {configureStore} from "@reduxjs/toolkit";
import dailyWeatherSlice from "./dailyWeather.ts";
import currentWeatherSlice from "./currentWeather.ts";

export const store = configureStore({
  reducer: {
    dailyWeather: dailyWeatherSlice,
    currentWeather: currentWeatherSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
