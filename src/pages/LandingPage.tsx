import Container from "../components/Container";
import Banner from "../components/LandingPageComponents/Banner";

import JoinUs from "../components/LandingPageComponents/JoinUs";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Banner />
      </Container>
      <div className="h-[70vh] bg-lightGrey">
        <JoinUs />
      </div>
    </div>
  );
};

export default LandingPage;
