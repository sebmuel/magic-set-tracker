import styles from "../styles/Home.module.css";
import { useState, useRef } from "react";
import fetchList from "../services/fetchList";
import cardsToSet from "../services/getSets";
import SetList from "../components/SetList";
import sortSet from "../services/sortSetList";

export default function Home() {
  const cardList = useRef();
  const [error, setError] = useState();
  const [results, setResults] = useState();

  const handleSearch = async () => {
    setError(null);
    const searchString = cardList.current.value;
    if (searchString === "") {
      setError("Provide valid string");
      return;
    }
    const names = searchString
      .split("\n")
      .map((s) => s.substring(s.indexOf(" ") + 1));

    const result = await fetchList(names);

    if (result.name === "AxiosError") {
      console.log(result.messsage);
      setError(result.message);
      return;
    }
    
    const array = [];
    for (const [key, value] of Object.entries(cardsToSet(result))){
      array.push([key, value])
    }
    setResults(array.sort(sortSet));
  };

  return (
    <div>
      <textarea className={styles.list_input} ref={cardList} />
      {error ? <h2>{error}</h2> : null}
      <button onClick={handleSearch}>Suchen</button>
      {results
        ? results.map((result) => <SetList result={result}></SetList>)
        : null}
    </div>
  );
}
