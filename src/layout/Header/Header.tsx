import RadioButton from "@components/RadioButton/RadioButton.tsx";
import cn from "classnames";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={cn(styles.wrapper)}>
      <div className={cn(styles.container)}>
        <div className={styles.search}>
          <input type="text" />
          <button>Search City</button>
        </div>
        <div className={cn(styles.switcher)}>
          <RadioButton
            label={"°C"}
            value="metric"
            name="units"
            id="metric"
            onChange={e => console.log(e)}
          />
          <RadioButton
            label={"°F"}
            value="imperial"
            name="units"
            id="imperial"
            onChange={e => console.log(e)}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
