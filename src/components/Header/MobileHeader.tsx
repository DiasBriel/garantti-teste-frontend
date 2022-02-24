import Logo from "./Logo";

type Props = {
  className: string;
};

const MobileHeader = ({ className }: Props) => {
  return (
    <div className={`${className} flex justify-center`}>
      <Logo />
    </div>
  );
};

export default MobileHeader;
