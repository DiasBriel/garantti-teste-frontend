type Props = {
  toLeft?: boolean;
};

const GradientEffect = ({ toLeft }: Props) => {
  let gradientOrientation: string;
  if (toLeft) {
    gradientOrientation = "left-0 bg-gradient-to-r";
  } else {
    gradientOrientation = "right-0 bg-gradient-to-l";
  }

  return (
    <div
      className={`absolute ${gradientOrientation} h-full w-[5%] from-lightGrey to-transparent`}
    ></div>
  );
};

export default GradientEffect;
