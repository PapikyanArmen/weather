import {groupedDateData} from "@customTypes/Weather.ts";
import cn from "classnames";
import styles from "./DayBlock.module.scss";
import {ICON_BASE_URL} from "@utils/helper.ts";
import moment from "moment/moment";
const OtherDays = (props: {data: groupedDateData[]}) => {
  const {data} = props;
  return (
    data &&
    data.map((el, i) => {
      return (
        <div key={`otherDay_${i}`} className={cn(styles.container)}>
          <p>{moment(el.list[0].dt_txt).format("L")}</p>
          <div>
            <span>{el.list[0].main.temp}</span>
            <img
              className={cn(styles.icon)}
              src={`${ICON_BASE_URL}${el.list[0].weather[0].icon}@2x.png`}
              alt={`${ICON_BASE_URL}${el.list[0].weather[0].icon}@2x.png`}
            />
          </div>
        </div>
      );
    })
  );
};
export default OtherDays;
