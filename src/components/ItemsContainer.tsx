import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { IResponse } from "../interfaces";

interface IItemsContainerProps extends React.PropsWithChildren {
  searchData: IResponse[];
  isLoading: boolean;
}

const ItemsContainer: React.FC<IItemsContainerProps> = (props) => {
  const { searchData, isLoading } = props;

  return (
    <div>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {searchData.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ItemsContainer;
