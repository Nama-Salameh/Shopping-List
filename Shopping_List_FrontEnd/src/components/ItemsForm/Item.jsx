import { Grid, Button } from "@mui/material";
import style from "./Item.module.css";
import { useState } from "react";
import sauvageImage from "../../assets/Sauvage.jpg"
const Item = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
      <Grid
        className={style.itemContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={sauvageImage} 
          alt="Perfume item"
          className={style.itemImage}
        />
        <div className={style.itemInformationContainer}>
          <h4>Suavage Dior</h4>
          <p>400</p>
        </div>
        {isHovered && (
        <div className={style.addToCartButtonContainer}>
          <Button className={style.addToCartButton}> Add to cart</Button>
        </div>
      )}
      </Grid>
  );
};

export default Item;
