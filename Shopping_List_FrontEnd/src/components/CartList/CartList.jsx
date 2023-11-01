import style from "./CartList.module.css";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import { Button } from "@mui/material";
import { useState } from "react";
import CheckoutDialog from "./CheckoutDialog";

const CartList = () => {
  const [isOpenCheckoutDialog, setIsOpenCheckoutDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { cartItems } = useCart();
  let totalAmount = 0;

  const handlecheckoutClick = () => {
    setIsOpenCheckoutDialog(true);
    setName("");
    setEmail("");
  };
  const handleCheckoutDialogClose = () => {
    setIsOpenCheckoutDialog(false);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
      <div className={style.footerContainer}>
        <h3>Total Amount : {totalAmount} </h3>
        <Button className={style.checkoutButton} onClick={handlecheckoutClick}>
          Checkout
        </Button>
      </div>

      {isOpenCheckoutDialog && (
        <CheckoutDialog
          isOpenCheckoutDialog={isOpenCheckoutDialog}
          handleCheckoutDialogClose={handleCheckoutDialogClose}
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
        />
      )}
    </div>
  );
};

export default CartList;
