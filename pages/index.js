import { useState } from "react";
import SearchForm from "../components/SearchForm";
import SetList from "../components/SetList";

export default function Home() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchForm enterCards={setResults}></SearchForm>
      {results
        ? results.map((result) => (
            <SetList key={result[0]} result={result}></SetList>
          ))
        : null}
    </div>
  );
}
