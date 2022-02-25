import { ReactNode } from "react";
import GradientEffect from "./GradientEffect";

interface Props {
  children: ReactNode;
}

const ScrollableList = ({ children }: Props) => {
  return (
    <div className="relative w-full">
      <GradientEffect toLeft />
      <GradientEffect />
      <div
        className="flex md:flex-wrap md:justify-center
       whitespace-nowrap gap-5 px-8 py-4 overflow-x-scroll scrollbar-hide"
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableList;
