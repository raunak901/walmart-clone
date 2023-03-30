import { IResponse } from "../interfaces";

interface IItemProps {
  item: IResponse;
}

const Item: React.FC<IItemProps> = ({ item }) => {
  const { name, thumbnailUrl, price } = item;

  return (
    <div style={{ flex: "1 0 21%", display: "block", cursor: "pointer" }}>
      <div>
        <img
          alt={name}
          src={thumbnailUrl}
          style={{ width: "240px", height: "320px" }}
        />
      </div>
      <div>
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
    </div>
  );
};

export default Item;
