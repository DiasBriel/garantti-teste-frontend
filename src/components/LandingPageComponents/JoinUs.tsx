import Container from "../Container";
import Form from "./Form";
import SectionTitle from "./SectionTitle";

const JoinUs = () => {
  return (
    <Container column>
      <SectionTitle
        title="Junte-se a nós"
        subtitle="Venha fazer parte dessa equipe com Garanttia de qualidade!"
      />
      <Form />
    </Container>
  );
};

export default JoinUs;
