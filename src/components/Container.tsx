import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  column?: boolean;
};

const Container = ({ children, className, column }: Props) => {
  return (
    <section
      className={`${className || ""} ${
        column ? "flex flex-col items-center py-10" : ""
      } container mx-auto px-4 xl:px-0 max-w-6xl`}
    >
      {children}
    </section>
  );
};

export default Container;
