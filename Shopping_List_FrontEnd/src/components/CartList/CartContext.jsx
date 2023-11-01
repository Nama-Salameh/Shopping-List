import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartItemsDispatch() {
  return useContext(CartContext).dispatch;
}

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);

  useEffect(() => {
    fetch("/api/cart", { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        dispatch({ type: "setItems", data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addItemToCart = (item) => {
    dispatch({ type: "addItem", item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: "removeItem", itemId });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const cartItemsReducer = (items, action) => {
  switch (action.type) {
    case "setItems": {
      return action.data;
    }
    case "addItem": {
      return [
        ...items,
        {
          image: action.item.image,
          name: action.item.name,
          price: action.item.price,
          id: action.item.id,
        },
      ];
    }
    case "removeItem": {
      return items.filter((item) => item.id !== action.itemId);
    }
    default:
      return items;
  }
};
