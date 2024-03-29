import {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchCurrentWeather, fetchDailyWeather} from "@redux/dailyWeather.ts";
import {selectCurrentWeather, selectDailyWeather} from "@redux/selectors";
import {useTypeDispatch} from "@hooks/redux.ts";
import styles from "./Home.module.scss";
import cn from "classnames";
import {groupForecastByDay, ICON_BASE_URL} from "@utils/helper";
import WeatherList from "@components/WeatherList/WeatherList.tsx";
import OtherDays from "@components/OtherDays/DayBlock.tsx";
// import {Weather, WeatherData} from "@customTypes/Weather.ts";

const Home = () => {
  const dispatch = useTypeDispatch();
  const {dailyWeather} = useSelector(selectDailyWeather);
  const {currentWeather} = useSelector(selectCurrentWeather);
  const list = dailyWeather.data?.list;
  const currentDayWeatherList = groupForecastByDay(list)[0];
  const otherDaysList = groupForecastByDay(list);
  useEffect(() => {
    dispatch(fetchDailyWeather());
    dispatch(fetchCurrentWeather());
  }, [dispatch]);
  console.log(groupForecastByDay(list));
  if (dailyWeather.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.currentWeatherBlock)}>
          <h1 className={cn(styles.cityName)}>{currentWeather.data?.name}</h1>
          <p className={cn(styles.temp)}>{currentWeather.data?.main.temp}</p>
          <img
            className={cn(styles.icon)}
            src={`${ICON_BASE_URL}${currentWeather.data?.weather[0].icon}@2x.png`}
            alt={`${ICON_BASE_URL}${currentWeather.data?.weather[0].icon}@2x.png`}
          />
          {currentWeather.data && currentWeather.data?.clouds.all > 0 ? (
            <p className={cn(styles.clouds)}>Clouds</p>
          ) : null}
        </div>
        <div className={cn(styles.dailyWeatherBlock)}>
          <WeatherList
            data={currentDayWeatherList && currentDayWeatherList.list}
          />
        </div>
      </div>
      <div className={cn(styles.otherDaysList)}>
        <OtherDays data={otherDaysList && otherDaysList} />
      </div>
    </div>
  );
};
export default Home;
