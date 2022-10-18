import { sortSet, cardsToSet, filterCards, validateSearchString } from "../services/helpers";
import { useState, useRef } from "react";
import fetchList from "../services/fetchList";
import Button from "./_Button";
import Image from "next/image";

export default function SearchForm({ enterCards }) {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const cardList = useRef();

  const handleSearch = async () => {
    setError(null);
    setLoading(true);

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
    enterCards(array.sort(sortSet));
    setLoading(false);
    setError(null);
  };

  return (
    <div>
      <div className="mb-2 block">
        <label>Eingabe der Kartenliste:</label>
      </div>
      <div className="">
        <textarea ref={cardList} className="h-80 min-h-[500px] w-2/4"></textarea>
      </div>
      <div className="text-center py-6">
        <Button type="button" onClickRef={handleSearch} buttonText={"Suchen"}>
          Suchen
          </Button>
          {isLoading ? <Image width={200} height={200} className="mx-auto" src="oval.svg" alt="Loader"></Image> :null}
      </div>
      {error ? "hi" : null}
    </div>
  );
}
