import MainImage from "../../assets/svg/MainImage";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="min-h-[500px] h-[60vh] md:h-[65vh] flex flex-col-reverse md:flex-row md:justify-between items-center">
      <div className="space-y-4">
        <h1>Usuários Garantti</h1>
        <h4 data-testid="subtitle">
          Garanttia de segurança para
          <br /> todos os nossos usuários.
        </h4>
        <div className="space-y-3 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row justify-center md:justify-start">
          <Button type="primary" label="JUNTE-SE A NÓS!" />
          <Button type="secondary" label="NOSSOS USUÁRIOS" />
        </div>
      </div>

      <MainImage />
    </div>
  );
};

export default Banner;
