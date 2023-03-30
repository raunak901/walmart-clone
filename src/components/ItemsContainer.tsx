import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { IResponse } from "../interfaces";
import { useState } from "react";
import { Pagination } from "@mui/material";

interface IItemsContainerProps extends React.PropsWithChildren {
  searchData: IResponse[];
  isLoading: boolean;
  searchParams: string;
}

const ItemsContainer: React.FC<IItemsContainerProps> = (props) => {
  const { searchParams, searchData, isLoading } = props;
  const totalPages = Math.ceil(searchData.length / 12);
  const [page, setPage] = useState<number>(1);

  const handleOnPageChange = (event: React.ChangeEvent<any>, page: number) => {
    window.scrollTo(0, 0);
    document.getElementById("container")?.scrollTo(0, 0);
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
      {!isLoading && (
        <>
          {searchParams && searchParams.length !== 0 && (
            <div
              style={{
                padding: 20,
                borderTop: "grey solid 1px",
                borderBottom: "grey solid 1px",
              }}
            >
              <strong
                style={{ fontFamily: "serif", fontSize: 20, marginBottom: 30 }}
              >
                Results for "{searchParams}"
              </strong>
              <span style={{ color: "#888" }}>(1000+)</span>
              <br />
              <span style={{ fontFamily: "serif", fontSize: 15 }}>
                Price when purchased online
              </span>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: 20,
              padding: 20,
            }}
          >
            {searchData
              .slice(page * 12 - 12, page * 12)
              .map((item: IResponse) => {
                return <Item key={item.id} item={item} />;
              })}
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 50 }}
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
