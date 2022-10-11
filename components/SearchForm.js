import { Textarea, Label, Alert, Button } from "flowbite-react";
import {
  sortSet,
  cardsToSet,
  filterCards,
  validateSearchString,
} from "../services/helpers";
import { useState, useRef } from "react";
import fetchList from "../services/fetchList";

export default function SearchForm({ enterCards }) {
  const [error, setError] = useState();
  const cardList = useRef();

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
    enterCards(array.sort(sortSet));
  };

  return (
    <div>
      <div className="mb-2 block">
        <label>Eingabe der Kartenliste: </label>
      </div>
      <div className="">
        <textarea ref={cardList} className="h-80 min-h-[700px] w-1/4 bg-slate-500"></textarea>
      </div>
      <div className="text-center py-6">
        <button
          type="button"
          onClick={handleSearch}
          className="text-white bg-gradient-to-br from-pink-500
         to-orange-400 hover:bg-gradient-to-bl focus:ring-4 
         focus:outline-none focus:ring-pink-200
          dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Suchen
        </button>
      </div>
      {error ? (
        <Alert color="failure" icon={HiInformationCircle}>
          {error}
        </Alert>
      ) : null}
    </div>
  );
}
