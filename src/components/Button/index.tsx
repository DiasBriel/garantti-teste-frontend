import React from "react";

type Props = {
  type: string;
  className?: string;
  label: string;
};

const Button = ({ type, className, label }: Props) => {
  let style: string = "";

  if (type === "primary") {
    style = "bg-gradient-to-l from-orange to-yellow hover:bg-gradient-to-r";
  }

  if (type === "secondary") {
    style =
      "bg-transparent border border-white text-white active:bg-white active:text-black lg:hover:bg-white lg:hover:text-black";
  }

  return (
    <button
      className={`${className} ${style} py-3 px-4 rounded-full transition duration-200 lg:hover:scale-105 active:scale-95 whitespace-nowrap`}
    >
      {label}
    </button>
  );
};

export default Button;
