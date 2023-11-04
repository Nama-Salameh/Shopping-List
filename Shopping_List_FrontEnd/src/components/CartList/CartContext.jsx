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
    fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item added to cart:", data);
        dispatch({ type: "addItem", item });
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const removeItemFromCart = (itemId) => {
    console.log("start deletion");
    fetch(`/api/cart/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "removeItem", itemId });
        console.log("delete succesfully");
      })
      .catch((error) => {
        console.error("Error deleting item from the cart and table:", error);
      });
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
