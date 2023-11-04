import style from "./CartList.module.css";
import { Dialog, Button } from "@mui/material";
const CheckoutDialog = ({
  isOpenCheckoutDialog,
  handleCheckoutDialogClose,
  name,
  handleNameChange,
  email,
  handleEmailChange
}) => {
  return (
    <Dialog open={isOpenCheckoutDialog} onClose={handleCheckoutDialogClose}>
      <form className={style.checkoutDialog}>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={handleNameChange}
          className={style.nameInput}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          className={style.emailInput}
        />
        <Button
          onClick={handleCheckoutDialogClose}
          className={style.submitButton}
        >
          Submit Order
        </Button>
      </form>
    </Dialog>
  );
};
export default CheckoutDialog;
