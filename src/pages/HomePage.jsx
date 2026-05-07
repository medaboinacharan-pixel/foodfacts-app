import { useFoodSearch } from "../hooks/useFoodSearch";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch();

  return (
    <div className="home-page">
      <SearchBar onSearch={searchFood} />

      <ErrorMessage message={error} />

      {results.length === 0 && !loading && !error && (
        <p>Search for food items to get started.</p>
      )}

      {loading && (
        <p>Loading...</p>
      )}

      {results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}

export default HomePage;
