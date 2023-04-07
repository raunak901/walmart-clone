import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ItemsContainer from "./components/ItemsContainer";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/SideBar";
import SubNavigation from "./components/SubNavigation";
import { BASE_URL, randomNumber } from "./constants";
import { IResponse } from "./interfaces";
import Navigation from "./components/Navigation";
import { useAppDispatch } from "./redux/hooks";
import { updateSearchQuery } from "./redux/slices/searchedQuerySlice";

const App: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
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
        const items = response.data.msg as Array<IResponse>;

        // Add hardcoded number of purchases
        const updatedItems = items.map((item) => ({
          ...item,
          numberOfPurchases: randomNumber(500, 1700),
        }));

        setSearchData(updatedItems);
        setIsLoading(false);
        dispatch(
          updateSearchQuery({
            query: searchParams,
            resultsCount: response?.data?.msg?.length || 0,
          })
        );
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
          <ItemsContainer isLoading={isLoading} searchData={searchData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
