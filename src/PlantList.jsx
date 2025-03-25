import "./index.css";

export default function PlantList({
  name,
  PLANTS,
  selectedFood,
  setSelectedFood,
}) {
  return (
    <section className="plants">
      <h2> {name} </h2>
      <ol>
        {PLANTS.map((food) => (
          <li
            key={food.id}
            onClick={() => setSelectedFood(food)}
            className={food === selectedFood ? "selected" : ""}
          >
            {food.name}
          </li>
        ))}
      </ol>
    </section>
  );
}
