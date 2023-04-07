import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { IResponse } from "../interfaces";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { ITEMS_PER_PAGE } from "../constants";
import { useAppSelector } from "../redux/hooks";

interface IItemsContainerProps extends React.PropsWithChildren {
  searchData: IResponse[];
  isLoading: boolean;
}

const ItemsContainer: React.FC<IItemsContainerProps> = (props) => {
  const { searchData, isLoading } = props;
  const { query, resultsCount } = useAppSelector(
    (store) => store.searchedQuery
  );

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(searchData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const updatedSearchData = searchData.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [searchData]);

  const handleOnPageChange = (_event: React.ChangeEvent<any>, page: number) => {
    window.scrollTo(0, 0);
    document.getElementById("items-container")?.scrollTo(0, 0);
    setPage(page);
  };

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "60vh",
            alignItems: "center",
          }}
        >
          {" "}
          <CircularProgress />
          &nbsp;&nbsp;<span>Loading...</span>
        </Box>
      )}
      {!isLoading && searchData.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          No results found!
        </div>
      )}
      {!isLoading && query && query.length !== 0 && (
        <div
          style={{
            padding: 20,
            borderTop: "grey solid 1px",
            borderBottom: "grey solid 1px",
            fontWeight: "normal",
          }}
        >
          <strong style={{ fontSize: 20, marginBottom: 30 }}>
            Results for "{query}"
          </strong>
          <span style={{ color: "#888" }}>({resultsCount})</span>
          <br />
          <span style={{ fontSize: 15 }}>Price when purchased online</span>
        </div>
      )}
      {!isLoading && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: 20,
              padding: 20,
            }}
          >
            {updatedSearchData.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 50,
            }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              onChange={handleOnPageChange}
              count={totalPages}
            />
          </div>
        </>
      )}
    </>
  );
};
export default ItemsContainer;
