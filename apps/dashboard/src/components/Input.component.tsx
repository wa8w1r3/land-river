import { ChangeEvent, FC } from "react";

interface Props {
  name: string;
  title: string;
  placeholder?: string;
  value: string | number;
  onChange(e: ChangeEvent): void;
}

const Input: FC<Props> = ({ name, title, placeholder, value, onChange }) => {
  return (
    <div className="flex items-center">
      <span className="text-sm">{title}:</span>
      <input
        name={name}
        className="ml-2 rounded-md p-1 flex-row justify-start items-center inline-flex border border-slate-400 text-sm focus:bg-slate-50 focus:border-slate-500 outline-none flex-0 w-3/5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
