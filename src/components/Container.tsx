import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <section
      className={`${
        className ? className : ""
      } container mx-auto px-4 xl:px-0 max-w-6xl`}
    >
      {children}
    </section>
  );
};

export default Container;
