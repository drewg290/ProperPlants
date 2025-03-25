export default function CartSelection({ plants, setSelectedFood }) {
  return (
    <nav>
      {plants.map((food) => (
        <a
          key={food.name}
          className="food"
          onClick={() => setSelectedFood(food)}
        >
          {food.name}
          {food.img}
          {food.id}
        </a>
      ))}
    </nav>
  );
}
