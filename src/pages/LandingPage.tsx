import Container from "../components/Container";
import Banner from "../components/LandingPageComponents/Banner";
import Divider from "../components/LandingPageComponents/Divider";
import JoinUs from "../components/LandingPageComponents/JoinUs";
import Users from "../components/LandingPageComponents/Users";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Banner />
      </Container>
      <div className="bg-lightGrey py-4 lg:py-10">
        <div id="junte-se">
          <JoinUs />
        </div>

        <Divider />
        <div id="usuarios">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
