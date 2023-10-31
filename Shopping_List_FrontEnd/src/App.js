import style from "./App.css";
import { ItemsProvider } from "./components/ItemContext";
import ItemList from "./components/ItemsList/ItemList";
import ShoppingListHeader from "./components/ShoppingListHeader/ShoppingList";
const item= {image:"../src/assets/Coco_chanel_women.png",name:"coco",price:"400"}
function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <ShoppingListHeader />
        <ItemList />
      </ItemsProvider>
    </div>
  );
}

export default App;
