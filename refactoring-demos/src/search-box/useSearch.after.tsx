import { useState, useEffect } from "react";

export function useSearch<T>() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<T[]>([]);

  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    if(!query.trim()) {
      setResults([]);
      return;
    }

    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);

    fetch(`/api/search?q=${query}`, { signal: newController.signal })
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch(() => setResults([]));

    return () => newController.abort('unmount');
  }, [query]);

  return { query, setQuery, results };
}
