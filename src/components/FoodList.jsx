import FoodCard from "./FoodCard";

function FoodList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <FoodCard
          key={product.code}
          product={product}
        />
      ))}
    </div>
  );
}

export default FoodList;