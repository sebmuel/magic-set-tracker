import { useState } from "react";
import { Accordion } from "flowbite-react";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="max-w-[90%] mx-auto p-6">
      <SearchForm enterCards={setResults}></SearchForm>
    <div className="">
    <Accordion alwaysOpen={true}>
      {results
        ? results.map((result) => (
          <Accordion.Panel key={result[0]}>
          <Accordion.Title className="set-name">
            <h2 className="text-lg text-teal-400">{result[0]}</h2>
            </Accordion.Title>
          <Accordion.Content>
            {/* TODO: GRID */}
            <div>
            {result[1].map((card) => (
              <Card key={card.id} cardData={card} />
            ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
          ))
        : null}
        </Accordion>
    </div>
    </div>
  );
}
