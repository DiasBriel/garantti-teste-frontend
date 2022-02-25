import { HashLink } from "react-router-hash-link";
import Button from "../Button";
import Logo from "./Logo";

type Props = {
  className: string;
};

const DesktopHeader = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-full flex justify-between items-center px-4 xl:px-0`}
    >
      <Logo />
      <div className="md:space-x-8 lg:space-x-16">
        <HashLink
          smooth
          to="#usuarios"
          className="underline text-white text-sm"
        >
          USUÁRIOS EXISTENTES
        </HashLink>
        <HashLink smooth to="#junte-se">
          <Button buttonStyle="secondary" label="NOVO USUÁRIO" />
        </HashLink>
      </div>
    </div>
  );
};

export default DesktopHeader;
