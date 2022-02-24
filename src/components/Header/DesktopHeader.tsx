import Button from "../Button";
import Logo from "./Logo";

type Props = {
  className: string;
};

const DesktopHeader = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full flex justify-between items-center px-4`}
    >
      <Logo />
      <div className="space-x-8 lg:space-x-16">
        <span className="underline text-white text-sm">
          USUÁRIOS EXISTENTES
        </span>
        <Button type="secondary" label="CADASTRAR NOVO USUÁRIO" />
      </div>
    </div>
  );
};

export default DesktopHeader;
