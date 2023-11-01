import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./ShoppingList.module.css";
import logo from "../../assets/perfume_logo.jpeg";
import { Link } from "react-router-dom";
import { useCart } from "../CartList/CartContext";

const ShoppingListHeader = () => {
  const { cartItems } = useCart();

  return (
    <div className={style.headerContainer}>
      <div className={style.h1Container}>
        <Link to="/">
          <img src={logo} className={style.logo} alt="perfumes logo" />
        </Link>
        <h1>Perfumes</h1>
      </div>
      <Link to="/cart">
        <ShoppingCartIcon fontSize="large" />
        <span>{cartItems.length}</span>
      </Link>
    </div>
  );
};
export default ShoppingListHeader;
