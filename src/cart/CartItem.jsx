import ItemQuantity from "./ItemQuantity";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div>
      <h3>
        {item.img}
        {item.name}
      </h3>
      <ItemQuantity
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
