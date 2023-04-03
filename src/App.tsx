import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ItemsContainer from "./components/ItemsContainer";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/SideBar";
import SubNavigation from "./components/SubNavigation";
import { BASE_URL } from "./constants";
import { IResponse } from "./interfaces";
import Navigation from "./components/Navigation";

const App: React.FC<{}> = () => {
  const [searchParams, setSearchParams] = useState("");
  const [searchData, setSearchData] = useState<Array<IResponse>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = () => {
    // To make sure that even if the same query is entered twice, a new result is shown
    setSearchData([]);

    const formattedSearchParams =
      searchParams.trim().length > 0 ? "?search=" + searchParams : "";
    setIsLoading(true);
    axios
      .get(BASE_URL + formattedSearchParams)
      .then((response) => {
        setSearchData(response.data.msg);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Failed to fetch data with error :" + error);
      });
  };

  useEffect(() => {
    fetchData();

    // NOTE: The line below is intentional
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerContent = (
    <>
      <Navigation>
        <Searchbar
          setSearchParams={setSearchParams}
          dataFetcherLambda={fetchData}
        />
      </Navigation>
      <SubNavigation />
    </>
  );

  return (
    <>
      {headerContent}
      <div style={{ display: "flex" }}>
        <div style={{ width: "20vw" }}>
          <Sidebar />
        </div>
        <div
          id="items-container"
          style={{
            width: "80vw",
            padding: "20px",
            height: "90vh",
            overflow: "auto",
            overflowX: "hidden",
          }}
        >
          <ItemsContainer
            isLoading={isLoading}
            searchData={searchData}
            searchParams={searchParams}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
