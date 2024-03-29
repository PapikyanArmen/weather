import {dailyWeatherList} from "@customTypes/Weather.ts";
import cn from "classnames";
import styles from "./WeatherList.module.scss";
import {ICON_BASE_URL} from "@utils/helper.ts";
import moment from "moment";
const WeatherList = (props: {data: dailyWeatherList[] | undefined}) => {
  const {data} = props;
  return (
    <ul className={cn(styles.item_list)}>
      {data &&
        data?.map((el, i) => {
          return (
            <li key={`dailyWeather_${i}`} className={cn(styles.item)}>
              <span>{moment(el.dt_txt).format("LTS")}</span>
              <span>{el.main.temp}</span>
              <img
                className={cn(styles.icon)}
                src={`${ICON_BASE_URL}${el.weather[0].icon}@2x.png`}
                alt={`${ICON_BASE_URL}${el.weather[0].icon}@2x.png`}
              />
            </li>
          );
        })}
    </ul>
  );
};
export default WeatherList;
