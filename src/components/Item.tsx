import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IResponse } from "../interfaces";
import { Box, Rating } from "@mui/material";

interface IItemContainerProps {
  item: IResponse;
}

const Item: React.FC<IItemContainerProps> = ({ item }) => {
  const { name, thumbnailUrl, price, averageRating } = item;

  return (
    <div
      style={{
        flex: "1 0 21%",
        display: "block",
        cursor: "pointer",
        marginBottom: 30,
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          alt={name}
          src={thumbnailUrl}
          style={{ width: "240px", height: "320px" }}
        />
        <span style={{ marginLeft: -40 }}>
          <FavoriteBorderIcon>
            <Button sx={{ color: "black" }} />
          </FavoriteBorderIcon>
        </span>
      </div>
      <div>
        <div>
          <Button
            sx={{ borderRadius: 9999, marginBottom: 2 }}
            variant="contained"
          >
            <strong>+ ADD</strong>
          </Button>
        </div>
        <span style={{ fontSize: 18 }}>
          <strong>${price}</strong>
        </span>
        <br />
        <span style={{ fontSize: 15, fontFamily: "serif" }}>
          Options from ${price} - ${(price + 50).toFixed(2)}
        </span>
        <br />
        <br />
        <div style={{ maxWidth: "200px" }}>{name}</div>
      </div>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          size="small"
          sx={{ color: "black" }}
          readOnly={true}
          value={averageRating || 0}
        />
      </Box>
    </div>
  );
};

export default Item;
