import { useState } from "react";
import Input from "../../components/Input";
import Button from "../Button";
import validator from "validator";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    if (targetName === "email") {
      if (!validator.isEmail(targetValue) && targetValue.length !== 0) {
        setErrorMessage("Email inválido!");
      } else {
        setErrorMessage("");
      }
    }

    setUserData(
      (prev) =>
        ({
          ...prev,
          [targetName]: targetValue,
        } as any)
    );
  };

  return (
    <form onSubmit={() => {}} className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mt-8 mb-10">
        <Input
          name="name"
          value={userData.name}
          onChange={handleUserData}
          placeholder="Nome"
        />
        <div className="w-full flex flex-col relative">
          <Input
            data-testid="email"
            name="email"
            value={userData.email}
            error={errorMessage.length !== 0}
            type="email"
            onChange={handleUserData}
            placeholder="Email"
          />
          {errorMessage.length !== 0 && (
            <span className="sm:absolute -bottom-6 text-sm text-red-500 font-semibold">
              {errorMessage}
            </span>
          )}
        </div>

        <Input
          name="role"
          value={userData.role}
          onChange={handleUserData}
          placeholder="Cargo"
        />
      </div>
      <Button buttonStyle="primary" label="JUNTE-SE A NÓS!" />
    </form>
  );
};

export default Form;
