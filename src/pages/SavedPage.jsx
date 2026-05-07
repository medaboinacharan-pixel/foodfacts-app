import { useNavigate } from "react-router-dom";

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate();

  const handleRemove = (code) => {
    dispatch({ type: "REMOVE", code });
  };

  const handleViewDetails = (code) => {
    navigate(`/product/${code}`);
  };

  return (
    <div className="saved-page">
      <h1>Saved Items</h1>

      {saved.length === 0 ? (
        <div className="empty-state">
          <p>You haven't saved any products yet.</p>
          <p>Click the "Save Product" button on any product detail page to add it here.</p>
        </div>
      ) : (
        <div className="saved-items-grid">
          {saved.map((product) => (
            <div key={product.code} className="saved-item">
              <img
                src={product.image_small_url || "https://via.placeholder.com/120"}
                alt={product.product_name}
              />

              <h3>{product.product_name}</h3>

              <p>
                <strong>Brand:</strong> {product.brands || "Unknown"}
              </p>

              <div className="button-group">
                <button
                  onClick={() => handleViewDetails(product.code)}
                  className="btn-details"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleRemove(product.code)}
                  className="btn-remove"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPage;
