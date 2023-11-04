import { createContext, useContext, useReducer , useEffect } from "react";

const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function useItemsDispatch() {
  return useContext(ItemsContext).dispatch;
}

export const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  useEffect(() => {
    console.log('Fetching data...');
  
    fetch("/api/items", {headers: {"Content-Type" : "application/json"},})
      .then((res) => {
        console.log(res);
        console.log(res.json);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        dispatch({ type: "setItems", data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

const itemsReducer = (items, action) => {
  switch (action.type) {
    case "setItems": {
      return action.data;
    }
    default:
      return items;
  }
};

const initialItems = [];
