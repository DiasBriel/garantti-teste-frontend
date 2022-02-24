import { useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";

type Props = {
  className?: string;
  placeholder?: string;
};

const SearchInput = ({ className, placeholder }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`border ${clicked ? "border-black" : "border-grey"} ${
        className || ""
      } flex items-center justify-between bg-white px-4 py-3 rounded-[10px] mt-8 mb-10`}
    >
      <input
        className="w-3/4 outline-none"
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
