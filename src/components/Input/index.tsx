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
      data-testid="email"
      onChange={onChange}
      type={type ? type : "text"}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`px-6 py-4 rounded-md border w-full ${
        error
          ? "border-red-500 text-red-500 focus:outline-red-500"
          : "border-grey"
      } transition duration-200`}
    />
  );
};

export default Input;
