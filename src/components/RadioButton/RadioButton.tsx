import {IRadioButton} from "@customTypes/RadioButton.ts";
import styles from "./RadioButton.module.scss";
import cn from "classnames";
const RadioButton = (props: IRadioButton) => {
  const {label, value, name, id, onChange} = props;
  return (
    <label htmlFor={id} className={cn(styles.container)}>
      <input
        className={cn(styles.input)}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};
export default RadioButton;
