import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="mt-5 flex justify-center">
      <MobileHeader className="md:hidden" />
      <DesktopHeader className="hidden md:inline-flex" />
    </header>
  );
};

export default Header;
