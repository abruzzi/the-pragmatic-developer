import { useState, useEffect } from 'react';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch(() => setResults([]));
    } else {
      setResults([]);
    }
  }, [query]);

  return { query, setQuery, results };
}