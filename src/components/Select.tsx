import React from "react";
export interface TaskProps {
  task: string;
  duration: number;
  completed: boolean;
}
const Select = ({
  input,
  handleChange,
  options,
  defaultValue,
  customChange,
}: {
  input: TaskProps;
  handleChange?: (args: TaskProps) => void;
  options: {
    value: number | string;
    label: string;
  }[];
  defaultValue?: TaskProps;
  customChange?: (args: number | string) => void;
}) => {
  console.log(defaultValue);
  return (
    <select
      value={defaultValue?.duration || +input.duration || input}
      className=" bg-white text-black border-indigo-600 border 
   rounded-full py-3 px-6"
      onChange={(e) =>
        customChange
          ? customChange(e.target.value)
          : defaultValue
          ? handleChange({ ...defaultValue, duration: +e.target.value })
          : handleChange({ ...input, duration: +e.target.value, completed: false })
      }
      name="duration"
      id=""
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
