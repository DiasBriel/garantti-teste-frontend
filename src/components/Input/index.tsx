type Props = {
  placeholder: string;
  name: string;
  value: string;
  type?: string;
  error?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, name, value, type, error, onChange }: Props) => {
  return (
    <input
      onChange={onChange}
      type={type ? type : "text"}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-[10px] border focus:border-black outline-none  ${
        error
          ? "border-red-500 text-red-500 focus:outline-red-500"
          : "border-grey"
      }`}
    />
  );
};

export default Input;
