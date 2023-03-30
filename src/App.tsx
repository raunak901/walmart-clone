import Button from "@mui/material/Button";
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

  const buttonStyles = {
    color: 'rgb(2,113,220)',
    borderRadius: 9999,
    marginBottom: 2
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(2,113,220)",
          height: "auto",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 10
        }}
      >
        <div style={{ display: 'flex' }}>
          <Button onClick={() => window.location.reload()} sx={{ ...buttonStyles }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo.png' alt='logo' />
          </Button>
          <Button sx={{ ...buttonStyles }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo1.png' alt='logo1' />
          </Button>
          <Button sx={{ ...buttonStyles }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo2.png' alt='logo2' />
          </Button>
        </div>


        <Searchbar setSearchParams={setSearchParams} />

        <div style={{ display: 'flex' }}>
          <Button sx={{ ...buttonStyles, paddingTop: 2 }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo3.png' alt='logo4' />
          </Button>
          <Button sx={{ ...buttonStyles, paddingTop: 2 }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo4.png' alt='logo4' />
          </Button>
          <Button sx={{ ...buttonStyles }}>
            <img style={{ height: '48px', width: 'auto' }} src='/logo5.png' alt='logo5' />
          </Button>
        </div>

      </div>

      <div className="sub-navigation">
        <SubNavigation />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "350px" }}>
          <Sidebar />
        </div>
        <div style={{ width: "150vh", padding: "20px", height: "100vh" }}>
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
}

export default App;
