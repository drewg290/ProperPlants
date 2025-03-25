import { useState } from "react";
import { PLANTS } from "./data";
import PlantList from "./PlantList";
import CartSelection from "./Cart";

export default function App() {
  const [FoodItems, setFoodItems] = useState(PLANTS);
  const [selectedFood, setSelectedFood] = useState();
  const [cart, updateCart] = useState();

  const addToCart = () => {
    /*
  updateCart({
...cart, selectedFood

  });

*/

    cart.map((selectedFood) => (
      <li key={selectedFood.id}> {selectedFood.name}</li>
    ));
  };

  const removeFromCart = () => {
    <ul>
      {cart.map((selectedFood) => (
        <li key={selectedFood.id}>
          {selectedFood.name}{" "}
          <button
            onClick={() => {
              setArtists(cart.filter((a) => a.id !== selectedFood.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>;
  };

  return (
    <>
      <div className="app">
        <header></header>

        <main></main>
      </div>
    </>
  );
}
