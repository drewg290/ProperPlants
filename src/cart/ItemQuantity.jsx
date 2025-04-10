export default function ItemQuantity({ item, addToCart, removeFromCart }) {
  return (
    <div>
      <button onClick={() => removeFromCart(item)}>-</button>
      <h3>{item.quantity}</h3>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
