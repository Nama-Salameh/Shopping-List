import Item from "../ItemsForm/Item";
import { useItems } from "../ItemContext";
import style from "./ItemList.module.css";
const ItemList = () => {
  const { items } = useItems();

  return (
    <div className={style.itemsListContainer}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;