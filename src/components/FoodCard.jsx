import { useNavigate } from "react-router-dom";

function FoodCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.code}`);
  };

  return (
    <div className="food-card" onClick={handleClick} style={{ cursor: "pointer" }}>

      <h2>{product.product_name}</h2>

      <p>
        Brand: {product.brands || "Unknown"}
      </p>

      <img
        src={
          product.image_small_url ||
          "https://via.placeholder.com/120"
        }
        alt={product.product_name}
      />

      <p>
        Calories:
        {product.nutriments?.["energy-kcal_100g"] || "N/A"}
      </p>

      <p>
        Protein:
        {product.nutriments?.proteins_100g || "N/A"} g
      </p>

      <p>
        Carbs:
        {product.nutriments?.carbohydrates_100g || "N/A"} g
      </p>

      <p>
        Fat:
        {product.nutriments?.fat_100g || "N/A"} g
      </p>

    </div>
  );
}

export default FoodCard;