import {useState, useEffect, useRef} from "react";

export function useSearch<T>() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<T[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fetchResult = (query: string) => {
    fetch(`/api/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch(() => setResults([]));
  }

  useEffect(() => {
    if(!query.trim()) {
      setResults([]);
      return;
    }

    if(timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      fetchResult(query);
    }, 500);

    return () => {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [query]);

  return { query, setQuery, results };
}
