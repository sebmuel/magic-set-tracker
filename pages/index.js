import styles from "../styles/Home.module.css";
import { useState, useRef } from "react";
import fetchList from "../services/fetchList";
import {
  sortSet,
  cardsToSet,
  filterCards,
  validateSearchString,
} from "../services/helpers";
import SetList from "../components/SetList";

export default function Home() {
  const cardList = useRef();
  const [error, setError] = useState();
  const [results, setResults] = useState();

  const handleSearch = async () => {
    setError(null);

    const searchString = cardList.current.value;
    if (!validateSearchString(searchString)) {
      setError("Provide valid string");
      return;
    }
    const names = filterCards(searchString);

    const result = await fetchList(names);
  
    if (result.name === "AxiosError") {
      setError(result.message);
      return;
    }
    const array = [];
    for (const [key, value] of Object.entries(cardsToSet(result))) {
      array.push([key, value]);
    }
    setResults(array.sort(sortSet));
  };

  return (
    <div>
      <textarea className={styles.list_input} ref={cardList} />
      {error ? <h2>{error}</h2> : null}
      <button onClick={handleSearch}>Suchen</button>
      {results
        ? results.map((result) => (
            <SetList key={result[0]} result={result}></SetList>
          ))
        : null}
    </div>
  );
}
