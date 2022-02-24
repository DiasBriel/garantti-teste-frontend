import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} container mx-auto px-4 xl:px-0 max-w-6xl`}>
      {children}
    </div>
  );
};

export default Container;
