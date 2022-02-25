import Container from "../Container";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <Container>
      <header className="mt-5 flex justify-center">
        <MobileHeader className="md:hidden" />
        <DesktopHeader className="hidden md:inline-flex" />
      </header>
    </Container>
  );
};

export default Header;
