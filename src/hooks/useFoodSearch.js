import { useState } from 'react';
import axios from 'axios';

export function useFoodSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFood = async (query) => {
    if (!query.trim()) {
      setError('Please enter a food name');
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await axios.get(
        'https://world.openfoodfacts.org/cgi/search.pl',
        {
          params: {
            search_terms: query,
            search_simple: 1,
            action: 'process',
            json: 1,
          },
        }
      );

      const filteredProducts = (response.data.products || []).filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      );

      setResults(filteredProducts);
    } catch (err) {
      if (err.response) {
        setError(`Server error: ${err.response.status}`);
      } else if (err.request) {
        setError('No response from server. Check your internet connection.');
      } else {
        setError('An error occurred while searching');
      }
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchFood };
}
