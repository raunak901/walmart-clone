import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const searchBoxStyles: React.CSSProperties = {
  height: "40px",
  width: "600px",
  paddingLeft: "1rem",
  paddingRight: "2.5rem",
  borderRadius: "9999px",
  borderStyle: "none",
  fontSize: "16px",
  display: "block",
};

const buttonStyle: React.CSSProperties = {
  cursor: "pointer",
  height: "35px",
  width: "35px",
  borderRadius: "9999px",
  borderStyle: "none",
  backgroundColor: "#ffc220",
  left: 562,
  top: 14,
};

interface ISearchParams extends React.PropsWithChildren {
  setSearchParams: React.Dispatch<React.SetStateAction<string>>;
  dataFetcherLambda: () => void;
}

const Searchbar: React.FC<ISearchParams> = ({
  setSearchParams,
  dataFetcherLambda,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const onSearchInputChangeHandler = (inputValue: string) => {
    setSearchParams(inputValue);
    setSearchInput(inputValue);
  };

  const handleOnClick = () => {
    dataFetcherLambda();
  };

  return (
    <>
      <div style={{ display: "flex", position: "relative", paddingTop: 12 }}>
        <input
          type="search"
          style={searchBoxStyles}
          value={searchInput}
          onChange={(e) => onSearchInputChangeHandler(e.target.value)}
          placeholder="Search everything at Walmart online and in store"
        />
        <button
          style={{ ...buttonStyle, position: "absolute" }}
          type="submit"
          onClick={handleOnClick}
        >
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default Searchbar;
