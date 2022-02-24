import React from "react";

type Props = {
  type: string;
  className?: string;
  label: string;
};

const Button = ({ type, className, label }: Props) => {
  let style: string = "";

  if (type === "primary") {
    style = "bg-gradient-to-l from-orange to-yellow";
  }

  if (type === "secondary") {
    style =
      "bg-transparent border border-white text-white hover:bg-white hover:text-black";
  }

  return (
    <button
      className={`${className} ${style} py-3 px-4 rounded-full transition duration-200`}
    >
      {label}
    </button>
  );
};

export default Button;
