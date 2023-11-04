import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemsProvider } from "./components/ItemContext";
import ItemList from "./components/ItemsList/ItemList";
import ShoppingListHeader from "./components/ShoppingListHeader/ShoppingList";
import { CartProvider } from "./components/CartList/CartContext";
import CartList from "./components/CartList/CartList";

function App() {
  return (
    <div className="App">
      <Router>
        <ItemsProvider>
          <CartProvider>
            <ShoppingListHeader />
            <Routes>
              <Route path="/cart" element={<CartList/>}/>
              <Route path="/" element={<ItemList/> }/>
            </Routes>
          </CartProvider>
        </ItemsProvider>
      </Router>
    </div>
  );
}

export default App;
