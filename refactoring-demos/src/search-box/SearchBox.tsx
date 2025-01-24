import { useSearch } from './useSearch';

export function SearchBox() {
  const { query, setQuery, results } = useSearch();

  return (
    <div className="flex flex-col items-center p-4 min-h-screen w-screen">
      <div className="w-full">
        <label htmlFor="search-input" className="block mb-2 text-sm font-medium text-slate-100">
          Search
        </label>
        <input
          id="search-input"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search..."
          className="block w-full rounded-md border border-gray-300 px-4 py-2 text-slate-100 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:ring-1 mb-4"
        />

        <ul className="space-y-2">
          {results.map((result) => (
            <li
              key={result}
              className="p-3 rounded-md bg-slate-800 shadow hover:bg-slate-600 transition-colors"
            >
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
