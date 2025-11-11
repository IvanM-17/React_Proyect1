import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map(product => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}
