import ProfileIcon from "../../assets/svg/ProfileIcon";
import Card from "../Card";
import Container from "../Container";
import SearchInput from "../Input/SearchInput";
import ScrollableList from "../ScrollableList";
import SectionTitle from "./SectionTitle";

const Users = () => {
  return (
    <Container column>
      <SectionTitle
        title="Veja nossa lista de usuários!"
        subtitle="Deseja procurar por alguem em específico?"
      />

      <SearchInput className="w-full md:w-2/5" placeholder="Nome da pessoa" />

      <ScrollableList>
        <Card colorful className="space-y-5">
          <ProfileIcon />
          <div className="flex flex-col items-center">
            <span className="text-base font-semibold">Gabriel Dias</span>
            <span className="text-sm text-white font-bold">Manager</span>
          </div>
        </Card>
      </ScrollableList>
    </Container>
  );
};

export default Users;
