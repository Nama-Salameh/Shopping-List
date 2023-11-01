import { Grid, Button } from "@mui/material";
import style from "./Item.module.css";
import { useState } from "react";
import { useCart } from "../CartList/CartContext";

const Item = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = item.image ?? "";
  const { addItemToCart } = useCart();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCartClick = () => {
    addItemToCart(item);
  };

  return (
    <Grid
      className={style.itemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={item.name} className={style.itemImage} />
      <div className={style.itemInformationContainer}>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
      {isHovered && (
        <div className={style.addToCartButtonContainer}>
          <Button
            className={style.addToCartButton}
            onClick={handleAddToCartClick}
          >
            Add to cart
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Item;
