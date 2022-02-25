import api from "./api";

export const fetchUsers = async () => {
  try {
    const users = await api.get("/user");

    return users.data;
  } catch (error) {
    alert("Usuários não encontrados...");
  }
};
