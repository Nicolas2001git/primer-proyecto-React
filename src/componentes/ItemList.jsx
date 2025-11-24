import ItemCard from "./ItemCard";
function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p>No se encontraron destinos.</p>;
  }
  return (
    <div className="grid-items">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
export default ItemList;
 