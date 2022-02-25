type Props = {
  buttonStyle: string;
  className?: string;
  label: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({ buttonStyle, className, label, disabled, type }: Props) => {
  let customStyle: string = "";

  if (buttonStyle === "primary") {
    customStyle =
      "bg-gradient-to-l from-orange to-yellow hover:bg-gradient-to-r shadow-xl";
  }

  if (buttonStyle === "secondary") {
    customStyle =
      "bg-transparent border border-white text-white active:bg-white active:text-black lg:hover:bg-white lg:hover:text-black";
  }

  return (
    <button
      type={type}
      className={`${className} ${customStyle} ${
        disabled ? "shadow-none opacity-50 cursor-not-allowed" : ""
      } py-3 px-4 rounded-full transition duration-200 whitespace-nowrap`}
    >
      {label}
    </button>
  );
};

export default Button;
