import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ItemsContainer from "./components/ItemsContainer";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/SideBar";
import SubNavigation from "./components/SubNavigation";
import { BASE_URL, DUMMY_DATA } from "./constants";
import { IResponse } from "./interfaces";

function App() {
  const [searchParams, setSearchParams] = useState("");
  const [searchData, setSearchData] = useState<Array<IResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function fetchData(searchString: string) {
    setIsLoading(true);
    axios
      .get(BASE_URL + searchString)
      .then((response) => {
        setSearchData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Failed to fetch data with error :" + error);
      });
  }

  useEffect(() => {
    //Added below code for testing
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setSearchData(DUMMY_DATA);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(2,113,220)",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <Searchbar setSearchParams={setSearchParams} />
      </div>
      <div className="sub-navigation">
        <SubNavigation />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "350px" }}>
          <Sidebar />
        </div>
        <div style={{ width: "150vh", padding: "20px", height: "200px" }}>
          <ItemsContainer isLoading={isLoading} searchData={searchData} />
        </div>
      </div>
    </>
  );
}

export default App;
