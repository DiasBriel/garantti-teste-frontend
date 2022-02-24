import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  colorful?: boolean;
};

const Card = ({ className, children, colorful }: Props) => {
  let customStyle: string = "";

  colorful
    ? (customStyle = "bg-gradient-to-b from-orange to-yellow")
    : (customStyle = "bg-white");

  return (
    <div
      className={`${
        className || ""
      } ${customStyle} flex flex-col items-center shadow-md py-5 px-7 rounded-md`}
    >
      {children}
    </div>
  );
};

export default Card;
