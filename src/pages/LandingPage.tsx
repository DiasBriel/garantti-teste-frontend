import Container from "../components/Container";
import Banner from "../components/LandingPageComponents/Banner";
import Divider from "../components/LandingPageComponents/Divider";

import JoinUs from "../components/LandingPageComponents/JoinUs";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Banner />
      </Container>
      <div className="bg-lightGrey py-4 lg:py-10">
        <JoinUs />
        <Divider />
      </div>
    </div>
  );
};

export default LandingPage;
