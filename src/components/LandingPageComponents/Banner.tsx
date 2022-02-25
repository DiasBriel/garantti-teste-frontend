import { HashLink } from "react-router-hash-link";
import MainImage from "../../assets/svg/MainImage";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="min-h-[500px] pb-10 sm:h-[60vh] md:h-[65vh] flex flex-col-reverse md:flex-row md:justify-between items-center">
      <div className="space-y-4">
        <h1>Usuários Garantti</h1>
        <h4 data-testid="subtitle">
          Garanttia de segurança para
          <br /> todos os nossos usuários.
        </h4>
        <div className="space-y-3 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row justify-center md:justify-start">
          <HashLink smooth to="#junte-se">
            <Button buttonStyle="primary" label="JUNTE-SE A NÓS!" />{" "}
          </HashLink>
          <HashLink smooth to="#usuarios">
            <Button buttonStyle="secondary" label="NOSSOS USUÁRIOS" />
          </HashLink>
        </div>
      </div>

      <MainImage />
    </div>
  );
};

export default Banner;
