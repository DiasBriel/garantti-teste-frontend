import axios from "axios";
import { fetchUsers } from "../../services/fetchUsers";
jest.mock("axios");

describe("API connection", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it("should get the list of users", async () => {
    const users = [
      {
        id: 1,
        name: "Gabriel Dias",
        email: "gabriel@email.com",
        role: "Full Stack Developer",
      },
      {
        id: 2,
        name: "Claiton Barreto",
        email: "claiton@email.com",
        role: "Full Stack Developer",
      },
    ];

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { data: users },
      })
    );
    mockedAxios.get.mockResolvedValueOnce(users);

    const listOfUsers = await fetchUsers();

    expect(axios.get).toHaveBeenCalledWith(`/user`);
    expect(listOfUsers).toEqual({ data: users });
  });
});
