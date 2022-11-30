import { useState, useRef } from "react";
import fetchList from "../services/fetchList";
import Button from "./_Button";
import Image from "next/image";
import Filters from "./layout/Filters";
import SetList from "./SetList";
import { cardsToSet, sortSet } from "../services/helpers";

export default function SearchForm({ enterCards }) {
  "use Strict";
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const cardList = useRef();

  const handleSearch = () => {
    setLoading(true);

    fetchList(cardList).then((res) => {
      if (res) {
        const setDictionary = cardsToSet(res.data);
        // setDictionary = sortSet(setDictionary);
        console.log(setDictionary);

        enterCards(setDictionary);
      } else {
        // TODO: notification to user
        console.log("NO INPUT");
      }
    });
    setLoading(false);
  };

  return (
    <div>
      <div className="mb-2 block">
        <label>Eingabe der Kartenliste:</label>
      </div>
      <div className="flex justify-between gap-12">
        <textarea
          ref={cardList}
          className="h-80 min-h-[500px] max-w-[350px] w-full rounded-lg shadow-lg
          border-2 border-darkBlue focus:border-lightBlue"
        ></textarea>
        <Filters />
      </div>
      <div className="text-center py-6 flex justify-center gap-4">
        {isLoading ? (
          <Image width={25} height={25} className="mx-auto" src="/oval.svg" alt="Loader"></Image>
        ) : null}
        <Button type="button" onClickRef={handleSearch} buttonText={"Suchen"}>
          Suchen
        </Button>
      </div>
      {error ? "hi" : null}
      <SetList result={enterCards} />
    </div>
  );
}
