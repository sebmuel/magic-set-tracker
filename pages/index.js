import { useState } from "react";
import SearchForm from "../components/SearchForm";
import SetList from "../components/SetList";
import Layout from "../components/layout/Layout";

export default function Home() {
  const [results, setResults] = useState();
  console.log(results);

  return (
    <Layout>
      <div className="max-w-[90%] mx-auto p-6">
        <SearchForm enterCards={setResults}></SearchForm>
        <div className="">
          {results ? Object.entries(results).map(([setName, cards]) => {
            console.log(setName)
              return <SetList key={setName} name={setName} cards={cards}></SetList>
          }) : ""}
        </div>
      </div>
    </Layout>
  );
}
