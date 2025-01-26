import { useState, useEffect } from "react";

export function useSearch<T>() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<T[]>([]);

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
