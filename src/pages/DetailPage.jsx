import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );

        if (!cancelled) {
          if (response.data?.product) {
            setProduct(response.data.product);
          } else {
            setError("Product not found");
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load product details");
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [barcode]);

  if (loading) {
    return <div className="detail-page"><p>Loading product details...</p></div>;
  }

  if (error) {
    return (
      <div className="detail-page">
        <ErrorMessage message={error} />
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="detail-page">
        <p>Product not found</p>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  const isSaved = saved.some((p) => p.code === barcode);

  const handleSaveToggle = () => {
    if (isSaved) {
      dispatch({ type: "REMOVE", code: barcode });
    } else {
      dispatch({ type: "ADD", product });
    }
  };

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="product-detail">
        <img
          src={product.image_url || "https://via.placeholder.com/300"}
          alt={product.product_name}
          className="product-image"
        />

        <div className="product-info">
          <h1>{product.product_name}</h1>

          <p>
            <strong>Brand:</strong> {product.brands || "Unknown"}
          </p>

          <p>
            <strong>Category:</strong> {product.categories || "Unknown"}
          </p>

          <button
            onClick={handleSaveToggle}
            className={isSaved ? "btn-saved" : "btn-save"}
          >
            {isSaved ? "✓ Remove from Saved" : "+ Save Product"}
          </button>
        </div>
      </div>

      <div className="nutrition-section">
        <h2>Nutrition Information (per 100g)</h2>

        <div className="nutrition-grid">
          <div className="nutrient">
            <strong>Energy</strong>
            <p>
              {product.nutriments?.["energy-kcal_100g"]
                ? `${product.nutriments["energy-kcal_100g"]} kcal`
                : "N/A"}
            </p>
          </div>

          <div className="nutrient">
            <strong>Protein</strong>
            <p>
              {product.nutriments?.proteins_100g
                ? `${product.nutriments.proteins_100g} g`
                : "N/A"}
            </p>
          </div>

          <div className="nutrient">
            <strong>Carbohydrates</strong>
            <p>
              {product.nutriments?.carbohydrates_100g
                ? `${product.nutriments.carbohydrates_100g} g`
                : "N/A"}
            </p>
          </div>

          <div className="nutrient">
            <strong>Fat</strong>
            <p>
              {product.nutriments?.fat_100g
                ? `${product.nutriments.fat_100g} g`
                : "N/A"}
            </p>
          </div>

          <div className="nutrient">
            <strong>Sugar</strong>
            <p>
              {product.nutriments?.sugars_100g
                ? `${product.nutriments.sugars_100g} g`
                : "N/A"}
            </p>
          </div>

          <div className="nutrient">
            <strong>Sodium</strong>
            <p>
              {product.nutriments?.sodium_100g
                ? `${product.nutriments.sodium_100g} g`
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
