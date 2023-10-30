import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./ShoppingList.module.css";
const ShoppibgListHeader = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.h1Container}><img src="../../cart.png" className={style.logo}></img>
      <h1>Shopping List</h1> </div>
      <ShoppingCartIcon  fontSize="large"/>
    </div>
  );
};
export default ShoppibgListHeader;
