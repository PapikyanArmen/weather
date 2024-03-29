import React from "react";
export interface IRadioButton {
  label: string;
  value: "metric" | "imperial";
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
