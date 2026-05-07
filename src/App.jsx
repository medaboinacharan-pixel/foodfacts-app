import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import "./App.css";

function App() {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {

    setLoading(true);
    setSearched(true);

    try {

      const encodedQuery =
        encodeURIComponent(query);

      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodedQuery}&search_simple=1&action=process&json=1`
      );

      const data = await response.json();

      const filteredProducts =
        data.products.filter(
          (p) =>
            p.product_name &&
            p.product_name.trim() !== ""
        );

      setResults(filteredProducts);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="app">

      <h1>FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {!searched && !loading && (
        <p>Search for food items.</p>
      )}

      {loading && (
        <p>Loading...</p>
      )}

      {searched &&
        !loading &&
        results.length === 0 && (
          <p>No results found.</p>
      )}

      {results.length > 0 && (
        <FoodList products={results} />
      )}

    </div>
  );
}

export default App;