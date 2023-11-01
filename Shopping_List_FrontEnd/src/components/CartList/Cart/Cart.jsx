import { Paper , Button} from "@mui/material";
import style from "./Cart.module.css";
import {useCart} from '../CartContext'
const Cart = ({ cart }) => {
  
  const { removeItemFromCart } = useCart();

  return (
    <Paper elevation={3} className={style.cartItemContainer}>
      <img src={cart.image} alt={cart.name} className={style.cartItemImage}/>
      <div className={style.itemInformationContainer}>
        <h3>{cart.name}</h3>
        <p>{cart.price}</p>
      </div>
      <div className={style.deleteButtonContainer}>

      <Button className={style.deleteItemButton} onClick={() => removeItemFromCart(cart.id)}>Delete</Button>
      </div>
    </Paper>
  );
};
export default Cart;
