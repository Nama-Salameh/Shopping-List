import style from "./CartList.module.css";
import { useCart } from "./CartContext";
import Cart from "./Cart";

const CartList = () => {
  const { cartItems } = useCart();
  let totalAmount = 0;
  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>No items in the cart.</p>
      </div>
    );
  }

  return (
    <div className={style.cartListContainer}>
      {cartItems.map((cartItem, index) => {
        totalAmount += cartItem.price;
        return <Cart key={index} cart={cartItem} />;
      })}
      <h4>Total Amount : {totalAmount} </h4>
    </div>
  );
};

export default CartList;
