import { useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";

type Props = {
  className?: string;
  placeholder?: string;
  disabled: boolean;
  searchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({
  className,
  placeholder,
  disabled,
  searchFunction,
}: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`border ${clicked ? "border-black" : "border-grey"} ${
        className || ""
      } ${
        disabled ? "cursor-not-allowed bg-gray-200 border-none" : ""
      } flex items-center justify-between bg-white px-4 py-3 rounded-[10px] mt-8 mb-10`}
    >
      <input
        className={`${
          disabled ? "bg-gray-200 border-none text-grey cursor-not-allowed" : ""
        } w-3/4 outline-none`}
        onChange={searchFunction}
        disabled={disabled}
        onFocus={() => setClicked(true)}
        onBlur={() => setClicked(false)}
        type="text"
        placeholder={placeholder || ""}
      />
      <SearchIcon stroke="#C4C4C4" />
    </div>
  );
};

export default SearchInput;
