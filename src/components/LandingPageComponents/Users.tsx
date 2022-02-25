import { useEffect, useState } from "react";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import api from "../../services/api";
import Card from "../Card";
import Container from "../Container";
import SearchInput from "../Input/SearchInput";
import ScrollableList from "../ScrollableList";
import SectionTitle from "./SectionTitle";
import { User } from "../../interfaces";
import { fetchUsers } from "../../services/fetchUsers";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [timer, setTimer] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    setLoadingMessage("Buscando usuários...");
    const response = await fetchUsers();

    try {
      setUsers(response.data);
    } catch (error) {
      alert("Ocorreu um erro...");
    }

    setLoading(false);
  };

  const findUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);

    if (e.target.value.length !== 0) {
      const newTimer = setTimeout(() => {
        setLoading(true);
        api
          .get(`/user/${e.target.value}`)
          .then((res) => {
            setUsers([res.data.data]);
            setErrorMessage("");
            setLoading(false);
          })
          .catch((err) => {
            if (err.response.status === 404) {
              setErrorMessage("A pessoa não foi encontrada.");
              getUsers();
              setLoading(false);
            } else {
              alert("Um erro inesperado ocorreu...");
            }
          });
      }, 1000);
      setTimer(newTimer);
    } else {
      getUsers();
      setErrorMessage("");
    }
  };

  return (
    <Container column>
      <SectionTitle
        title="Veja nossa lista de usuários!"
        subtitle="Deseja procurar por alguem em específico?"
      />

      <SearchInput
        className="w-full md:w-2/5"
        placeholder="Email da pessoa"
        disabled={loading}
        searchFunction={findUser}
      />

      {errorMessage !== "" && !loading ? (
        <span className="text-sm text-center text-red-500 font-bold">
          Pessoa não encontrada... Verifique abaixo se ela se encontra na lista
          de usuários cadastrados.
        </span>
      ) : (
        ""
      )}

      {loading && users.length !== 0 ? (
        <span className="text-2xl text-gray-300 font-bold">
          {loadingMessage}
        </span>
      ) : (
        <ScrollableList data-testid="users">
          {users.map((user) => (
            <Card key={user.id} colorful className="space-y-5 min-w-[200px]">
              <ProfileIcon />
              <div className="flex flex-col items-center space-y-1">
                <span className="text-base font-semibold">{user.name}</span>
                <span className="text-sm font-semibold">{user.email}</span>
                <span className="text-sm text-white font-bold">
                  {user.role}
                </span>
              </div>
            </Card>
          ))}
        </ScrollableList>
      )}
    </Container>
  );
};

export default Users;
