import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./ShoppingList.module.css";
import myImage from '../../assets/perfume_logo.jpeg';

const ShoppibgListHeader = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.h1Container}>
        <img src={myImage} className={style.logo} alt="cart"></img>
        <h1>Perfumes</h1>
      </div>
      <ShoppingCartIcon fontSize="large" />
    </div>
  );
};
export default ShoppibgListHeader;
