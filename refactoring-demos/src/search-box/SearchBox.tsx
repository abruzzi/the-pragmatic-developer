import { useSearch } from "./useSearch";

export function SearchBox() {
  const { query, setQuery, results } = useSearch();

  return (
    <div>
      <input
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
}